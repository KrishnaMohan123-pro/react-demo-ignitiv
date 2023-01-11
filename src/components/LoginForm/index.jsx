import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./index.css";
import { signIn } from '../../services/firebase';

export default function LoginForm(props) {
    const [showLoginForm, setShowLoginForm] = useState(true);
    // state to store login form data
    const [loginData, setLoginData] = useState({email: '', password: ''});
    // state to store sign up form data
    const [signUpData, setSignUpData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: ''
    });
    function handleSwitchForm(e){
        e.preventDefault();
        if (showLoginForm) setShowLoginForm(false);
        else setShowLoginForm(true);
    }
    function handleInputChange(e) {
        if (showLoginForm) {
            switch(e.target.id) {
                case "email": setLoginData(prev => {
                    return {...prev, email: e.target.value}
                }); break;
                case "password": setLoginData(prev => {
                    return {...prev, password: e.target.value}
                }); break;
                default: console.log('default')
            }
        } else {
            switch(e.target.id) {
                case "email": setSignUpData(prev => {
                    return {...prev, email: e.target.value}
                }); break;
                case "password": setSignUpData(prev => {
                    return {...prev, password: e.target.value}
                }); break;
                case "fname": setSignUpData(prev => {
                    return {...prev, fname: e.target.value}
                }); break;
                case "lname": setSignUpData(prev => {
                    return {...prev, lname: e.target.value}
                }); break;
                case "phone": setSignUpData(prev => {
                    return {...prev, phone: e.target.value}
                }); break;
                default: console.log('default')
            }
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        if(showLoginForm) {
            signIn(loginData.email, loginData.password)
            .then(res => console.log("Successfully logged in", res))
            .catch(e => console.log("Login Failed", e));
        } else {
            console.log('register form data', signUpData);
            props.openModal(false);
        }
        
    }
    if (showLoginForm) {
        return (
            <div>
            <form className='mainForm' noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <TextField id="email" className='formElement' label="Email Address" variant="outlined" type={'email'} value={loginData.email} onChange={handleInputChange} /><br/>
                <TextField id="password" className='formElement' label="Password" variant="outlined" type={'password'} value={loginData.password} onChange={handleInputChange} />
                <br />
                <Button variant="outlined" className='loginButton' color="primary" type='submit'>
                    Login
                </Button>
            </form>
            <br/>
            <hr/>
            <br/>
            <p>New user? <Button color="secondary" size="small" style={{width: 'auto'}} onClick={handleSwitchForm}>Register</Button></p>
          </div>
        );
    }
    return (
        <div>
            <form className='registerForm' noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <TextField id="fname" className='formElement' label="First Name" variant="outlined" type={'text'} value={signUpData.fname} onChange={handleInputChange} /><br/>
                <TextField id="lname" className='formElement' label="Last Name" variant="outlined" type={'text'} value={signUpData.lname} onChange={handleInputChange} /><br/>
                <TextField id="email" className='formElement' label="Email Address" variant="outlined" type={'email'} value={signUpData.email} onChange={handleInputChange} /><br/>
                <TextField id="phone" className='formElement' label="Contact Number" variant="outlined" type={'text'} value={signUpData.phone} onChange={handleInputChange} /><br/>
                <TextField id="password" className='formElement' label="Password" variant="outlined" type={'password'} value={signUpData.password} onChange={handleInputChange} /><br/>
                <Button variant="outlined" className='loginButton' color="primary" type='submit'>
                    Sign Up
                </Button>
            </form>
            <Button color="secondary" size="small" style={{width: 'auto'}} onClick={handleSwitchForm}>Login</Button>
        </div>
    )  
}