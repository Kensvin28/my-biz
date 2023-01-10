import React from 'react';
import Header from "../Header";

function ProfilePage() {
    return (
        <div>
            <Header/>
            {/*https://tailwindcomponents.com/component/profile-form*/}
            <div className="h-full my-2">
                <div className="border-b-2 block md:flex">
                    <div className="w-full md:w-2/5 p-8 pb-2 sm:p-6 lg:p-8 bg-white shadow-md">
                        <div className="flex justify-between">
                            <span className="text-xl font-semibold block">Profile</span>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 pt-0 p-8 bg-white lg:ml-4 shadow-md">
                        <div className="rounded shadow p-6">
                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Company Name</label>
                                <div className="flex">
                                    <input disabled id="companyName" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="Alun Noodle"/>
                                </div>
                            </div>
                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Account Number</label>
                                <input disabled id="accountNumber" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="123456789"/>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Business Registration
                                    Number</label>
                                <input disabled id="businessRegistrationNumber" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="123456789"/>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Address</label>
                                <div className="flex">
                                    <input disabled id="address" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="190 Bukit Jalil, Kuala Lumpur"/>
                                </div>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Contact Person</label>
                                <div className="flex">
                                    <input disabled id="contactPerson" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="A Wen"/>
                                </div>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Phone Number</label>
                                <div className="flex">
                                    <input disabled id="phoneNumber" className="
        border-1  rounded px-4 py-2 w-full
      " type="text" defaultValue="01234567890"/>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="w-full md:w-3/5 pt-0 p-8 bg-white lg:ml-4 shadow-md">
                        <div className="rounded shadow p-6">
                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Change Password</label>
                                <div className="flex">
                                    <input id="password" className="
        form-control
        block
        w-full
        px-4
        py-2
        my-2
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
      " type="password" defaultValue="password1$"/>
                                </div>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Confirm Password</label>
                                <div className="flex">
                                    <input id="confirmPassword" className="
        form-control
        block
        w-full
        px-4
        py-2
        my-2
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
      " type="password" defaultValue="password1$"/>
                                </div>
                            </div>
                            <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save Password
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 pt-0 p-8 bg-white lg:ml-4 shadow-md">
                        <div className="rounded shadow p-6">
                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Change PIN</label>
                                <div className="flex">
                                    <input id="password" className="
        form-control
        block
        w-full
        px-4
        py-2
        my-2
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
      " type="password" defaultValue="123456"/>
                                </div>
                            </div>

                            <div className="pb-4">
                                <label className="font-semibold text-gray-700 block pb-1">Confirm PIN</label>
                                <div className="flex">
                                    <input id="confirmPassword" className="
        form-control
        block
        w-full
        px-4
        py-2
        my-2
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
      " type="password" defaultValue="123456"/>
                                </div>
                            </div>
                            <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save PIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;