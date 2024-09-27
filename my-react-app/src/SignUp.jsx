import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/SignUp.css';

const SignUp = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function signUp(e) {
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
        <legend>Sign Up</legend>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={signUp}
            placeholder='Email'
          />
          <br /><br />
          <input
            type="password"
            name="password" 
            value={input.password}
            onChange={signUp}
            placeholder='Create Password'
          />
          <br /><br />
          <input
            type="password"
            name="confirmPassword" 
            value={input.confirmPassword}
            onChange={signUp}
            placeholder='Confirm Password'
          />
          <br /><br />
          <button type='submit'>Sign Up</button> 
          <br /><br />
          <p>Already have an account? <Link to='/login'>Login</Link></p> 
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;
