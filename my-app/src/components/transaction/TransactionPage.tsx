import React from 'react';
import Header from "../Header";
import BalanceCard from "../dashboard/BalanceCard";
import { Link } from "react-router-dom";
import Card from '../dashboard/Card';


function TransactionPage() {
    return (
        <div>
            <Header></Header>
            <BalanceCard/>
            <div className="flex flex-row justify-center">
               <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                   <Link to="/schedule-transfer">
                       <Card image={"https://img.icons8.com/fluency-systems-regular/512/timetable.png"} cardTitle={"Schedule"} text={""}/>
                   </Link>
                   <Link to="/organize-transfer">
                       <Card image={"https://img.icons8.com/material-two-tone/512/sorting-answers.png"} cardTitle={"Organize Transfer Destinations"} text={""}/>
                   </Link>
               </div>
           </div>
        </div>


    );
}

export default TransactionPage;