import React from 'react';
import { Link } from 'react-router-dom';
// const [ details, setDetails ] = useState({});

const SignupButton = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <button type="button" className="signup" onClick={handleClick}>
      <Link to="/signup">
        <i className="fas fa-user-plus" />
        Sign Up
      </Link>
    </button>

  );
};

export default SignupButton;
