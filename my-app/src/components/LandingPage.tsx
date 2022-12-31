import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import LoginCard from "./LoginCard";

function LandingPage() {
    return (
        <div>
            <Header></Header>
            <LoginCard></LoginCard>
            <div className="flex justify-center mt-2">
                <p>Don’t have an account yet? <Link to="/register" className={"text-blue-600"}>REGISTER NOW</Link></p>
            </div>
        </div>
    );
}

export default LandingPage;
