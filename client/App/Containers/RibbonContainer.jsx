import React from 'react';
import SignupButton from '../Components/SignupButton';
import LoginButton from '../Components/LoginButton';

class RibbonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ribboncontainer">
        <h1>API Watch</h1>
        <div></div>
        {this.props.loginFail ? <SignupButton /> : null}
        {this.props.loginFail ? <LoginButton /> : null}
      </div>
    );
  }
}

export default RibbonContainer;
