import React, {useState} from 'react';
import Header from '../Header';
import Modal from "./TransferModal";

function Transfer() {
    const [inputDestinationAccNum, setInputDestinationAccNum] = useState('')
    const [inputSourceAccNum, setInputSourceAccNum] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [showModal, setShowModal] = React.useState(false)

    const transfer = () => {
        setShowModal(true);
        console.log('Transferred Successfully!');
    };

    const handleDestinationAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputDestinationAccNum(event.target.value);
        console.log('destination:', inputDestinationAccNum);
    };

    const handleSourceAccNum = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputSourceAccNum(event.target.value);
        console.log('source: ', inputSourceAccNum);
    };

    const handleAmount = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputAmount(event.target.value);
        console.log('amount: ', inputAmount);
    };

    const handleDescription = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputDescription(event.target.value);
        console.log('description: ', inputDescription);
    };

    return (
        <div>
            <Header/>
            <div className="flex flex-col p-6 rounded-r-lg shadow-lg max-w-sm w-full mx-auto justify-center">
                <label htmlFor="destination_account">Destination Account</label>
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
                       type="text" id="destination_account" name="designatedAccount"
                       onChange={handleDestinationAccNum}></input>

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
                       type="text" id="source_account" name="sourceAccount"
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
                       type="text" id="amount" name="amount"
                       onChange={handleAmount}></input>

                <label htmlFor="description">Description</label>
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
                       type="text" id="description" name="description"
                       onChange={handleDescription}></input>

                <button
                    onClick={transfer}
                    type="submit"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Transfer
                </button>
                
                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </div>
        </div>
    );
}

export default Transfer;