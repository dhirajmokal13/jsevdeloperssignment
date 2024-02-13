import React from 'react'
import './RadioButton.css'

export const RadioButton = ({ title, options, requiredIndication, onChange, check }) => {
    const SingleButton = ({ name, uniqueIdentifier }) => {
        return (
            <div style={{ display: 'inline', marginRight: '2vw' }}>
                <input
                    className="radioBtn"
                    type="radio"
                    onChange={onChange}
                    name={title}
                    checked={check === name}
                    value={name}
                    id={`${name}-${uniqueIdentifier}`}
                />
                <label
                    className="radioLabel"
                    htmlFor={`${name}-${uniqueIdentifier}`}
                > {name} </label>
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
