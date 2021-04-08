import React from 'react';
import { Link } from 'react-router-dom';
// const [ details, setDetails ] = useState({});

const SignupButton = () => {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <button type="button" className="button" onClick={handleClick}>
      <Link to="/signup">
        <p className="buttonText">Sign Up</p>
      </Link>
    </button>

  );
};

export default SignupButton;
