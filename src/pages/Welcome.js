import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Welcome.css'
import { Button } from '../components/forms/Button'

export const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="welcomeContainer">
            <span className="welcomeTitle">Welcome to PopX</span>
            <span className='welcomeSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
            <Button buttonBackgroundColor="#6c25ff" buttonTextColor="white" onPress={()=>navigate("/register")}>Create Account</Button>
            <Button buttonBackgroundColor="#cbbbfb" buttonTextColor="black" onPress={()=>navigate("/login")}>Already Registered? Login</Button>
        </div>
    )
}
