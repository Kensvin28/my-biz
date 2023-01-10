import React, { useContext, useState } from 'react';
import Header from "../Header";
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { LoginContext } from "../LoginContextProvider";
import axios from 'axios';
import { supabaseAdmin } from '../../supabase';

const LoginCard = () => {
    const navigate = useNavigate();

    // const { isAuth, setAuth }: any = useContext(LoginContext)
    // const login = async () => {
    //     var result = await axios.get('http://localhost:5000/token', { withCredentials: true });
    //     var { data } = result.data;
    //     setAuth(data != null) //or conditional state
    // }

    // const logout = async () => {
    //     await axios.get('logout')
    //     setAuth(false) //or conditional state
    // }
    //--------------------------------------------------------------------------------------------------------
    const [inputCompName, setInputCompName] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const handleChangeComp = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCompName(event.target.value);
        console.log('compname:', inputCompName);
    };

    const handleChangePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputPassword(event.target.value);
        console.log('password: ', inputPassword);
    };

    async function userLogin() {
        const { data, error } = await supabaseAdmin
            .from('companies')
            .select()
            .eq('CompanyName', inputCompName)
            .eq('Password', inputPassword)

        if (data?.length != 0) {
            console.log("success")
            console.log(data);

            var GlobalCompanyName = data?.map(user => user.CompanyName).toString();
            var GlobalBusinessRegNumber = data?.map(user => user.BusinessRegNumber).toString();
            var GlobalCompanyAddress = data?.map(user => user.CompanyAddress).toString();
            var GlobalContactPerson = data?.map(user => user.ContactPerson).toString();
            var GlobalPhoneNumber = data?.map(user => user.PhoneNumber).toString();
            var GlobalPassword = data?.map(user => user.Password).toString();
            var GlobalPin = data?.map(user => user.PIN).toString();
            console.log(GlobalCompanyName);
            console.log(GlobalBusinessRegNumber);
            console.log(GlobalCompanyAddress);
            console.log(GlobalContactPerson);
            console.log(GlobalPhoneNumber);
            console.log(GlobalPassword);
            console.log(GlobalPin);

            //redirect
            navigate('/dashboard');
        }
        else if (data?.length == 0) {
            alert("Wrong Company Name or Password")
            console.log("no succes")
            console.log(data);
        }
        else if (error) {
            throw error;
        } else {
            console.log("all good")
        }
    }

    //--------------------------------------------------------------------------------------------------------


    return (
        // https://tailwind-elements.com/docs/standard/components/cards/3
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Login</h5>
                <input
                    onChange={handleChangeComp}
                    type="text"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        my-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="company_name"
                    placeholder="Company Name" />
                <input
                    onChange={handleChangePassword}
                    type="password"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        my-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="password"
                    placeholder="Password"
                />

                <button
                    onClick={userLogin}
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login
                </button>
            </div>
        </div>
    );
};

export default LoginCard;