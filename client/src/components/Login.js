import React, {useState} from "react";
import { useHistory } from "react-router-dom";

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

  const handleSubmit  = e => {
    e.preventDefault();
    /* uselogin function that add check login, adds token if good and sends user to bubblepage route */
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
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
