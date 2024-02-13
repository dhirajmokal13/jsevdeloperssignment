import React from 'react'
import './RadioButton.css'

export const RadioButton = ({ title, options, requiredIndication }) => {
    const SingleButton = ({ name, uniqueIdentifier }) => {
        return (
            <div style={{ display: 'inline', marginRight: '2vw' }}>
                <input className="radioBtn" type="radio" name={title} value={name} id={`${name}-${uniqueIdentifier}`} />
                <label className="radioLabel" htmlFor={`${name}-${uniqueIdentifier}`}>{name}</label>
            </div>
        );
    }
    return (
        <div>
            <span className='radioTitle'>{title}{requiredIndication && <sup style={{ color: 'red' }}>*</sup>}</span>
            {
                options?.map((name, index) => {
                    return <SingleButton key={index} uniqueIdentifier={index} name={name} />
                })
            }
        </div>
    )
}
