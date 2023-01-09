import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from '../Header';

//https://www.rhbgroup.com/files/business/financing/business-loan/BizPower_SME_Financing_Application_Form_.pdf

function LoanPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                <p className="font-bold">Your Loan Applications</p>
                {/*<p>You have no ongoing loans</p>*/}
                <div className="ml-2 my-2 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <p>Loan Number: 12345678</p>
                    {/*TODO: Make the status using progress bar*/}
                    <p>Status: <b>On review</b></p>
                    <p>Amount: RM10000</p>
                </div>
                <div className="mx-2 m-4">
                    <button onClick={() => navigate("/apply-loan")} type="button"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Apply
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoanPage;