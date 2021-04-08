import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (

  <button type="button" className="button">
    <Link to="login">
      <p className="buttonText">Login</p>
    </Link>
  </button>

);

export default LoginButton;
[]