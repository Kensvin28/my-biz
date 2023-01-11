import React, {useState} from 'react';
import Header from "../Header";
import {supabaseAdmin} from "../../supabase";
import Modal from "./TransferModal";
import type {} from '@mui/x-date-pickers-pro/themeAugmentation';
import TextField from '@mui/material/TextField';

function ScheduleTransfer() {
    const [inputSourceAccNum, setInputSourceAccNum] = useState('')
    const [inputDestinationAccNum, setInputDestinationAccNum] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [showModal, setShowModal] = React.useState(false)

    const handleDescription = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputDescription(event.target.value);
        console.log('description: ', inputDescription);
    };

    const scheduleTransfer = () => {
        setShowModal(true);
        console.log('Transfer Scheduled Successfully!');
    };

    const handleDestinationAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputDestinationAccNum(event.target.value);
        console.log('compname:', inputDestinationAccNum);
    };

    const handleAmount = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputAmount(event.target.value);
        console.log('password: ', inputAmount);
    };

    const handleSourceAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputSourceAccNum(event.target.value);
        console.log('password: ', inputSourceAccNum);
    };


    const openFavourites = () => {

    };

    return (
        <div>
            <Header/>
            <div className="flex flex-col p-6 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">

                <label htmlFor="source-account">Source Account</label>
                <select onChange={handleSourceAccNum} className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Select Account">
                    <option selected value="123456789">123456789</option>
                </select>

                <label htmlFor="destination_account">Destination Account</label>
                <div className="px-3
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ">
                <span className={"w-78"}>
                <input className="form-control appearance-none outline-none
        inline-block
        "
                       type="text" id="destination_account" name="destinationAccount"
                       onChange={handleDestinationAccNum}>
                </input>
                    </span>
                    <span>
                    <button
                        className="inline-block bg-none float-right"
                        onClick={openFavourites}>
                        <img className="h-6 object-centered m-auto"
                             src={"https://img.icons8.com/material-two-tone/512/sorting-answers.png"}/>
                    </button>
                </span>
                </div>

                <label htmlFor="amount">Amount (RM)</label>
                <input className="form-control
        block
        w-1/2
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
                       type="text" id="amount" name="amount"
                       onChange={handleAmount}></input>

                <label htmlFor="description">Description</label>
                <input className="form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       type="text" id="description" name="description"
                       onChange={handleDescription}></input>

                <div className="flex items-center justify-center">
                    <div className="datepicker relative form-floating mb-3 w-full">
                        <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="timepicker relative form-floating mb-3 w-full">
                        <label htmlFor="floatingInput" className="text-gray-700">Select a time</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={scheduleTransfer}
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Schedule
                </button>

                <Modal showModal={showModal} setShowModal={setShowModal} type={"schedule"}/>
            </div>
        </div>
    );
}

export default ScheduleTransfer;