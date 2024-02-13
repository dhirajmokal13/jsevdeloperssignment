import React, { useState } from 'react'
import { InputBox } from '../components/forms/InputBox'
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
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const Container = ({ children }) => {
    return <div style={{ marginBottom: '3.3vh' }}>{children}</div>
  }

  return (
    <div className='registrationContainer'>
      <span className='registrationTitle'>Create your PopX account</span>

      <Container>
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
      </Container>

      <Container>
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
      </Container>
    </div>
  )
}
