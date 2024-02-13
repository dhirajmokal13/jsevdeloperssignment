import React, {useState} from 'react'
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
  
  return (
    <div className='registrationContainer'>
      <span className='registrationTitle'>Create your PopX account</span>
      <InputBox
        type="email"
        placeholder="Enter email address"
        title="Email Address"
        value={}
        onChange={
          (data) =>
            formDataHandle("email", data.target.value)
        }
      />
    </div>
  )
}
