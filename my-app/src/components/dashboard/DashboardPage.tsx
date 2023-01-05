import React from 'react';
import Header from '../Header';
import Card from "./Card";
import {Link} from "react-router-dom";
import {LoginProvider} from "../LoginContextProvider";

function DashboardPage() {
    return (
        <div>
            {/*<LoginProvider>*/}
            {/*    <Header/>*/}
            {/*</LoginProvider>*/}
            <Header/>
            {/*icons from: https://icons8.com/*/}
            <div className="mx-auto justify-center m-5 w-96">
            <Link to="/transaction">
                <Card cardTitle={'Transaction History'} text={'See your transaction report'} image={'https://img.icons8.com/material-rounded/512/purchase-order.png'}></Card>
            </Link>
            </div>
            {/*TODO: move to profile*/}
            <div className="mx-auto justify-center m-5 w-96">
            <Link to="/qr">
                <Card cardTitle={'Show QR'} text={'scan QR'} image={'https://img.icons8.com/material-rounded/512/qr-code.png'}></Card>
            </Link>
            </div>
            <div className="mx-auto justify-center m-5 w-96">
            <Link to="/loan">
                <Card cardTitle={'View Loan Application'} text={'In this page user can view loan application'} image={'https://img.icons8.com/material-rounded/512/coin-in-hand.png'}></Card>
            </Link>
            </div>
            <div className="mx-auto justify-center m-5 w-96">
            <Link to="/transaction">
                <Card cardTitle={'Make Transaction (Demo)'} text={'In this page user can make transaction'} image={'https://img.icons8.com/material-rounded/512/data-in-both-directions.png'}></Card>
            </Link>
            </div>
        </div>
    )

}

export default DashboardPage;