import React from 'react'
import '../css/Welcome.css'
import { Button } from '../components/forms/Button'
export const Welcome = () => {
    return (
        <div style={{ position: 'absolute', bottom: '2.5vh', margin: 'auto 6vw', width: '86%' }}>
            <span className="welcomeTitle">Welcome to PopX</span>
            <span className='welcomeSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
            <Button buttonBackgroundColor="#2a2aec" buttonTextColor="white">Create Account</Button>
        </div>
    )
}
