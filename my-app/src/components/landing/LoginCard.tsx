import React, {useContext} from 'react';
import Header from "../Header";
import {Outlet, Navigate, useNavigate} from 'react-router-dom';
import {LoginContext} from "../LoginContextProvider";
import axios from 'axios';

const LoginCard = () => {
    const navigate = useNavigate();

    const {isAuth, setAuth}: any = useContext(LoginContext)
    const login = async () => {
        var result = await axios.get('http://localhost:5000/token', {withCredentials: true});
        var { data} = result.data;
        setAuth(data != null) //or conditional state
    }
    const logout = async () => {
        await axios.get('logout')
        setAuth(false) //or conditional state
    }

    const handleAuth = () => {
        navigate('/dashboard');
    }

    return (
        // https://tailwind-elements.com/docs/standard/components/cards/3
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Login</h5>
                <input type="text" className="
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
                       placeholder="Company Name"/>
                <input
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
                <button onClick={handleAuth} type="submit"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login
                </button>
            </div>
        </div>
    );
};

export default LoginCard;