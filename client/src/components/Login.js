import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const inititialData = {
  username: '',
  password: ''
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] =  useState(inititialData)
  const {push} = useHistory();

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
    console.log(login)
  }

  const handleSubmit  = (e, cred) => {
    e.preventDefault();
    /* uselogin function that add check login, adds token if good and sends user to bubblepage route */
    axios.post('http://localhost:5000/api/login', cred)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        push('/bubble-page')
      })
      .catch(err => console.log('unable to login:', err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={(e) => handleSubmit(e, login)}>
        <lable>Username:
            <input 
              type='text' 
              name='username' 
              value={login.username}
              onChange={handleChange}

            />
        </lable>
        <lable>Password:
            <input 
              type='password' 
              name='password' 
              value={login.password}
              onChange={handleChange}
            />
        </lable>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
