import React from 'react'

export const Button = ({ children, buttonBackgroundColor, buttonTextColor }) => {

    const buttonStyle = {
        width: '100%',
        padding: '1.5vh',
        borderRadius: '1.5vh',
        outline: 'none',
        fontWeight: 'bold',
        backgroundColor: buttonBackgroundColor,
        color: buttonTextColor,
        borderColor: buttonBackgroundColor
    }

    return (
        <button style={buttonStyle}>
            {children}
        </button>
    )
}