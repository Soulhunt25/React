import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const Navigate = useNavigate()

  function login(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const { email, password } = JSON.parse(storedUserData);

      if (input.email === email && input.password === password) {
        alert('Login successful');
        Navigate('/')
      } 
      else {
        alert('Invalid email or password');
      }
    } 
  }

  return (
    <div>
      <fieldset>
        <legend>Login</legend>

        <form onSubmit={handleSubmit}>
          <span>Login: </span>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={login}
            placeholder='Phone number, username or email'
          />
          <br /><br />
          <span>Password: </span>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={login}
            placeholder='Password'
          />
          <br />
          <button type='submit'>Login</button>
          <br />
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
      </fieldset>
    </div>
  );
};

export default LoginPage;
