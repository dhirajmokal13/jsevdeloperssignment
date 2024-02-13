import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
import { Button } from '../components/forms/Button'
import { InputBox } from '../components/forms/InputBox'
import { Validations } from '../utils/Validations'

export const Login = () => {
  const navigate = useNavigate();
  const validate = Validations();

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const [detailsValidations, setDetailsValidations] = useState(false);

  const formDataHandle = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value
    });
    setDetailsValidations(validate.emailValidation(loginDetails.email) && validate.passwordValidation(loginDetails.password));
  }

  return (
    <div className='loginContainer'>
      <span className='loginTitle'>Signin to your Popx account</span>
      <span className='loginSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
      <InputBox
        type="email"
        placeholder="Enter email address"
        title="Email Address"
        value={loginDetails.email}
        onChange={
          (data) =>
            formDataHandle("email", data.target.value)
        }
      />
      <InputBox
        type="password"
        placeholder="Enter password"
        title="Password"
        value={loginDetails.password}
        onChange={
          (data) =>
            formDataHandle("password", data.target.value)
        }
      />
      <Button buttonBackgroundColor="#6c25ff" buttonTextColor="white" disable={!detailsValidations} onPress={()=>navigate("/register")}>Login</Button>
    </div>
  )
}
