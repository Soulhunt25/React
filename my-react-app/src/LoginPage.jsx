import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css';

const LoginPage = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  function login(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
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
