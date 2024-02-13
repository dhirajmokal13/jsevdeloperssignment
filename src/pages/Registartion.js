import React, { useState } from 'react'
import { InputBox } from '../components/forms/InputBox'
import { RadioButton } from '../components/forms/RadioButton';
import '../css/Registration.css'

export const Registartion = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: ''
  });

  const formDataHandle = (key, value) => {
    setFormData((pre) => ({
      ...pre,
      [key]: value
    }))
  }

  return (
    <div className='registrationContainer'>
      <span className='registrationTitle'>Create your PopX account</span>

      <div style={{ marginBottom: '3.3vh' }}>
        <InputBox
          type="text"
          placeholder="Enter Full Name"
          title="Full Name"
          value={formData.name}
          requiredIndication={true}
          onChange={
            (data) =>
              formDataHandle("name", data.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: '3.3vh' }}>
        <InputBox
          type="tel"
          placeholder="Enter Phone Number"
          title="Phone number"
          value={formData.phone}
          requiredIndication={true}
          onChange={
            (data) =>
              formDataHandle("phone", data.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: '3.3vh' }}>
        <InputBox
          type="email"
          placeholder="Enter Email"
          title="Email address"
          value={formData.email}
          requiredIndication={true}
          onChange={
            (data) =>
              formDataHandle("email", data.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: '3.3vh' }}>
        <InputBox
          type="password"
          placeholder="Enter Password"
          title="Password"
          value={formData.password}
          requiredIndication={true}
          onChange={
            (data) =>
              formDataHandle("password", data.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: '3.3vh' }}>
        <InputBox
          type="text"
          placeholder="Enter Company Name"
          title="Company name"
          value={formData.company}
          requiredIndication={true}
          onChange={
            (data) =>
              formDataHandle("company", data.target.value)
          }
        />
      </div>

      <div style={{ marginBottom: '3.3vh' }}>
        <RadioButton title={'Are you an Agency?'} requiredIndication={true} options={['Yes','No']}/>
      </div>
    </div>
  )
}
