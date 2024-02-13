import React from 'react'

export const Button = ({ children, buttonBackgroundColor, buttonTextColor, onPress, disable }) => {

    const buttonStyle = {
        width: '100%',
        padding: '2vh',
        borderRadius: '1vh',
        outline: 'none',
        fontWeight: '700',
        backgroundColor: disable ? '#cbcbcb' : buttonBackgroundColor,
        color: buttonTextColor,
        border: 'none',
        marginBottom: '1.2vh',
    }

    return (
        <button style={buttonStyle} onClick={onPress} disabled={disable}>
            {children}
        </button>
    )
}