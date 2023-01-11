import React, {useState} from 'react';
import Header from "../Header";
import {supabaseAdmin} from "../../supabase";
import Modal from "./TransferModal";

function ScheduleTransfer() {

    const [inputDesignatedAccNum, setInputDesignatedAccNum] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputSourceAccNum, setInputSourceAccNum] = useState('')
    const [showModal, setShowModal] = React.useState(false)

    const scheduleTransfer = () => {
        setShowModal(true);
        console.log('Transfer Scheduled Successfully!');
    };

    const handleDesignatedAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputDesignatedAccNum(event.target.value);
        console.log('compname:', inputDesignatedAccNum);
    };

    const handleAmount = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputAmount(event.target.value);
        console.log('password: ', inputAmount);
    };

    const handleSourceAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputSourceAccNum(event.target.value);
        console.log('password: ', inputSourceAccNum);
    };


    return (
        <div>
            <Header/>
            <div className="flex flex-col p-6 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">
                <label htmlFor="designated_account">Designated Account</label>
                <input className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       type="text" id="designated_account" name="designatedAccount" value=""
                       onChange={handleDesignatedAccNum}></input>

                <label htmlFor="source-account">Source Account</label>
                <input className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       type="text" id="source_account" name="sourceAccount" value=""
                       onChange={handleSourceAccNum}></input>

                <label htmlFor="amount">Amount</label>
                <input className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       type="text" id="amount" name="amount" value=""
                       onChange={handleAmount}></input>

                <div className="flex items-center justify-center">
                    <div className="datepicker relative form-floating mb-3 xl:w-96">
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               placeholder="Select a date"/>
                        <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="timepicker relative form-floating mb-3 xl:w-96">
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               placeholder="Select a time"/>
                        <label htmlFor="floatingInput" className="text-gray-700">Select a time</label>
                    </div>
                </div>

                <button
                    onClick={scheduleTransfer}
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Schedule
                </button>

                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </div>
        </div>
    );
}

export default ScheduleTransfer;