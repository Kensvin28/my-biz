import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Header";

interface Props {
    text: string;
}
function RegisterPage() {
    return (
        // https://tailwind-elements.com/docs/standard/components/cards/3
        <div>
            <Header/>
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-max">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Register</h5>

                <input
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
                    required/>

                <input
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
                    placeholder="Business Registration Number"
                    required/>

                <input
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
                    placeholder="Company Address"
                    required/>

                <input
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
                    placeholder="Contact Person"
                    required/>

                <input
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
                    id="phone_number"
                    placeholder="Phone Number"
                    required/>

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
                    placeholder="Create Password"
                    required/>

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
                    id="confirm_password"
                    placeholder="Confirm Password"
                    required/>

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
                    id="pin"
                    placeholder="Create PIN"
                    required/>
                
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
                    id="confirm_pin"
                    placeholder="Confirm PIN"
                    required/>

                <button type="button"
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