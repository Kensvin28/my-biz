import React from 'react';
import Header from "../Header";
import BalanceCard from "../dashboard/BalanceCard";

function TransactionPage() {
    return (
        <div>
            <Header></Header>
            <BalanceCard/>
           <div className="flex flex-row justify-center">
               <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">

               </div>
               <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"></div>
           </div>
        </div>
    );
}

export default TransactionPage;