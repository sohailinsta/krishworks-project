import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function clickHandler (e) {
        setEmail(e.target.value);
    }
    function clickSandler (e) {
        setPassword(e.target.value);
    }
    function SignIn (e) {
        e.preventDefault();
    }

    function register (e){
        e.preventDefault();
        }
  return (
  <div className="login">
      <Link to="/">
      <img className="login__logo" 
      src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png" />
      </Link>
      <div className="login__container">
          <h1>Sign-in</h1>
          <form>
              <h5>E-mail </h5>
              <input type="text" value={email} onChange={clickHandler}/>
              <h5>Password</h5>
              <input type="password" value={password} onChange={clickSandler}/>
          </form>
          <button type='submit' onClick={SignIn} className="signIn__button">Sign In</button>
          <p>
          By Signing-in you agree to Amazon's conditions 
          of Use & sale. please see our privacy notice.
          </p>
          <button onClick={register} className="login__registerbutton">Create Your Amazon Account</button>
      </div>
  </div>
  )
}

export default Login;