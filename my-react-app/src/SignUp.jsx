import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    const {email, password, confirmPassword} = input;
    if (password !== confirmPassword) {
      alert("Password do not match.")
      return;
    }

    localStorage.setItem('userData', JSON.stringify({email,password}));

    // console.log(input);
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
