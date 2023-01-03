import React from 'react';
import Header from '../Header';
import Card from "./Card";
import {Link} from "react-router-dom";

function DashboardPage() {
    return (
        <div>
            <Header></Header>
            {/*icons from: https://icons8.com/*/}
            <Link to="/transaction">
                <Card cardTitle={'Transaction History'} text={'In this page user can see transaction report'} image={'https://img.icons8.com/material-rounded/512/purchase-order.png'}></Card>
            </Link>
            <Link to="/qr">
                <Card cardTitle={'Show QR'} text={'In this page user can scan QR'} image={'https://img.icons8.com/material-rounded/512/qr-code.png'}></Card>
            </Link>
            <Link to="/loan">
                <Card cardTitle={'View Loan Application'} text={'In this page user can view loan application'} image={'https://img.icons8.com/material-rounded/512/coin-in-hand.png'}></Card>
            </Link>
            <Link to="/transaction">
                <Card cardTitle={'Make Transaction (Demo)'} text={'In this page user can make transaction'} image={'https://img.icons8.com/material-rounded/512/data-in-both-directions.png'}></Card>
            </Link>
        </div>
    )

}

export default DashboardPage;