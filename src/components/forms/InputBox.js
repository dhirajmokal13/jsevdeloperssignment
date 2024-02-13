import React from 'react'
import './inputBox.css'

export const InputBox = ({ type, placeholder, title, value, onChange, required }) => {
    return (
        <div className='inputContainer' style={{width: '91%'}}>
            <label className="inputLabel">{title} {required && <sup style={{ color: 'red' }}>*</sup>}</label>
            <input type={type} className="inputField" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
