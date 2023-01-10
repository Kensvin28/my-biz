import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import Header from "../Header";
import {Stepper, StepperControl, UseContextProvider} from "./StepCreator";
import Documents from "./Documents";
import Declaration from "./Declaration";
import Collateral from "./Collateral";
import Financing from "./Financing";
import Company from "./Company";
import {useNavigate} from "react-router-dom";

//https://www.rhbgroup.com/files/business/financing/business-loan/BizPower_SME_Financing_Application_Form_.pdf

function ApplyLoanPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const steps = [
        "Company Information",
        "Financing",
        "Collateral",
        "Documents",
        "Declaration"
    ];

    const displayStep = (step: any) => {
        switch (step) {
            case 1:
                return <Company/>;
            case 2:
                return <Financing/>;
            case 3:
                return <Collateral/>;
            case 4:
                return <Documents/>;
            case 5:
                return <Declaration/>;
            default:
        }
    };

    const handleClick = (direction: any) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
        // submit
        if(newStep > steps.length){
            navigate("/loan");
        }
    };

    return (
        <div>
            <Header/>
            <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-3/4">


                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep}/>

                    <div className="my-10 p-10 ">
                        <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {currentStep <= steps.length && (
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </div>
    );
}

export default ApplyLoanPage;