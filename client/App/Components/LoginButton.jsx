import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => (

  <button type="button" className="login">
    <Link to="login">
      <i className="fas fa-sign-in-alt"> Login</i>
    </Link>
  </button>

);

export default LoginButton;
