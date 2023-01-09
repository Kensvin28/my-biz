import React, { useState } from 'react';
import { useRef } from 'react';
import {Link} from "react-router-dom";
import { supabaseAdmin } from '../../supabase';
import Header from "../Header";
import { useNavigate } from 'react-router-dom';

interface Props {
    text: string;
}

function RegisterPage() {

    const navigate = useNavigate();
    const [inputCompName, setInputCompName] = useState('')
    const [inputBusinessNum, setInputBusinessNum] = useState('')
    const [inputContactPerson, setinputContactPerson] = useState('')
    const [inputAddress, setinputAddress] = useState('')
    const [inputPhoneNum, setinputPhoneNum] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    const [inputConfPassword, setinputConfPassword] = useState('')
    const [inputPin, setinputPin] = useState('')
    const [inputConfPin, setinputConfPin] = useState('')

    // var registerFlag = 1;

    const handleChangeComp = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputCompName(event.target.value);
        console.log('compname:', inputCompName);
    };

    const handleChangeBusNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setInputBusinessNum(event.target.value);
      console.log('businesnumber', inputBusinessNum);
    };
    
    const handleChangeContactPerson = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setinputContactPerson(event.target.value);
        console.log('compname:', inputContactPerson);
      };

    const handleChangeinputAddress = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setinputAddress(event.target.value);
        console.log('compname:', inputAddress);
      };
      
    const handleChangePhoneNumber = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setinputPhoneNum(event.target.value);
    console.log('compname:', inputPhoneNum);
    };

    const handleChangePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setinputPassword(event.target.value);
    console.log('compname:', inputPassword);
    };

    const handleChangeConfirmPassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setinputConfPassword(event.target.value);
    console.log('compname:', inputConfPassword);
    };

    const handleChangePin = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setinputPin(event.target.value);
    console.log('compname:', inputPin);
    };

    const handleChangeConfirmPin = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setinputConfPin(event.target.value);
    console.log('compname:', inputConfPin);
    };
      
    async function checkAvailability(){
        //check if company name or number is used
        const { data, error } = await supabaseAdmin
        .from('companies')
        .select()
        .eq('CompanyName', inputCompName)

        if (data?.length!=0){
            alert("company name used or number used")
            console.log(data)
            return false
        } 
        else if (error){
            throw error;
        }else {
            console.log("all good")
            return true
        }
    }

    async function register(){
        //check availability
        if(await checkAvailability() == false){
            console.log("error")
            return;
        }

        //check pass and pin
        if(!(inputPassword==inputConfPassword&&inputPin==inputConfPin)){
            alert("Incorrect password and/or Pin")
            console.log("different password and/or Pin")
            return;
        }

        //input to database
        const { data, error } = await supabaseAdmin.from("companies").insert({
            CompanyName:inputCompName,
            BusinessRegNumber: inputBusinessNum,
            CompanyAddress: inputAddress,
            ContactPerson: inputContactPerson,
            PhoneNumber : inputPhoneNum,
            Password: inputPassword ,
            PIN: inputPin,
        })
        console.log("inputted")
        navigate('/');
        if (error) {
            //error will throw here
            throw error;
        }
    }

    return (
        // https://tailwind-elements.com/docs/standard/components/cards/3
        <div>
            <Header/>
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-max">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Register</h5>

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
                    placeholder="Company Name"
                   />

                <input
                    onChange={handleChangeBusNum}
                    type="number"
                    className="
        form-control
        block
        w-80
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
                    id="business_registration_number"
                    placeholder="Business Registration Number"/>

                <input
                    onChange={handleChangeinputAddress}
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
                    id="company_address"
                    placeholder="Company Address"/>

                <input
                    onChange={handleChangeContactPerson}
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
                    id="contact_person"
                    placeholder="Contact Person"/>

                <input
                    onChange={handleChangePhoneNumber}
                    type="number"
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
                    id="phone_number"
                    placeholder="Phone Number"/>

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
                    placeholder="Create Password"/>

                <input
                    onChange={handleChangeConfirmPassword}
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
                    id="confirm_password"
                    placeholder="Confirm Password"/>

                <input
                    onChange={handleChangePin}
                    type="tel"
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
                    id="pin"
                    placeholder="Create PIN"/>
                
                <input
                    onChange={handleChangeConfirmPin}
                    type="tel"
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
                    id="confirm_pin"
                    placeholder="Confirm PIN"/>

                <button type="button"
                        onClick={register} //function yg nge call resghiter
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Register
                </button>
            </div>
        </div>
    <div className="flex justify-center mt-2">
        <Link to="/" className={"text-blue-600"}>Login</Link>
    </div>
    </div>
    );
}

export default RegisterPage;