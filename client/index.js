import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import MainPage from './App/Pages/MainPage';
import LoginPage from './App/Pages/LoginPage';
import SignupPage from './App/Pages/SignupPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFail: true,
      redirect: null,
    };
    this.doLogIn = this.doLogIn.bind(this);
  }

  componentDidMount() {
    const tempState = JSON.parse(JSON.stringify(this.state))
    fetch('/isLoggedIn')
    .then((response) => response.json())
    .then((data) => {
      const updateObj = {loginFail: !data.isLoggedIn}
      this.setState(updateObj)
    })
    .catch((err) => console.log(err));
  }

  // invoked when user presses login button
  doLogIn() {
    const userStr = document.getElementById('username').value;
    const pwStr = document.getElementById('password').value;

    // debugging
    console.log('Login Initiated.');
    console.log(`Username: ${userStr}, Password: ${pwStr}`);

    // get rid of whitespaces from login
    userStr.replace(/\s+$/, '');

    const sendObj = { username: userStr, password: pwStr };
    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(sendObj),
    };

    // ping the backend with the
    fetch('/login', requestBody)
      .then((response) => response.json())
      .then((data) => {
        // based on returned login state, change the ribbon\
        console.log('loginFail state: ', data.loginFail);
        this.setState({ loginFail: data.loginFail });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <Route path="/" exact render={(props) => <MainPage loginFail={this.state.loginFail} />} />
        <Route path="/login" exact render={(props) => <LoginPage loginFcn={this.doLogIn} />} />
        <Route path="/signup" exact render={(props) => <SignupPage loginFail={this.state.loginFail} />} />
      </Router>
    );
  }
}

ReactDOM.render((<App />), document.getElementById('root'));
