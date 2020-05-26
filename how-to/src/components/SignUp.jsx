import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const history = useHistory();

  const [user, setUser ] = useState({
    username: '',
    password: '',
    email: ''
  })

  const handleInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/register', user)
      .then(res => {
        console.log('POST request for signup', res);
        history.push('/login');
      })
      .catch(err => {
        console.log(err.response);
        alert('Sign Up Failed')
      });

    setUser({
      username: '',
      password: '',
      email: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>

        <label>
          <input 
            type='text'
            autofocus
            name='username'
            value={user.username}
            onChange={handleInput}
            placeholder='Username'
          />
        </label>

        <label>
          <input 
            type='password'
            name='password'
            value={user.password}
            onChange={handleInput}
            placeholder='Password'
          />
        </label>

        <label>
          <input 
            type='text'
            name='email'
            value={user.email}
            onChange={handleInput}
            placeholder='Email'
          />
        </label>

        <button onSubmit={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;