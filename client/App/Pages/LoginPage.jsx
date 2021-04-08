import React from 'react';
import { useHistory } from 'react-router';

const LoginPage = (props) => {
  const history = useHistory();

  const routeChange = () => {
    const path = '/';
    history.push(path);
  };

  return (
    <div className="loginpage">
      <div className="loginbox">
        <img src="https://vectorified.com/images/orca-icon-9.png" alt="Orca icon" />
        <input id="username" type="text" placeholder="Enter your username here" className="form username" />
        <input id="password" type="password" placeholder="Enter your password here" className="form password" />
        <button className="login" onClick={() => { props.loginFcn(), routeChange(); }}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
