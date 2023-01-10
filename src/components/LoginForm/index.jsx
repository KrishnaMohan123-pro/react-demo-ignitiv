import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./index.css";

export default function LoginForm() {
    return (
        <div>
        <form className='mainForm' noValidate autoComplete="off">
            <TextField id="email" className='formElement' label="Email Address" variant="outlined" /><br/>
            <TextField id="password" className='formElement' label="Password" variant="outlined" />
        </form>
        <Button variant="outlined" className='loginButton' color="primary">
            Login
        </Button>
        <br/>
        <hr/>
        <br/>
      </div>
    );
}