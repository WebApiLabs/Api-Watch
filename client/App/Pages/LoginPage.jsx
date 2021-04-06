import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const LoginPage = (props) => {
  const history = useHistory();

  const routeChange=()=> {
    let path = `/`;
    history.push(path);
  }

  return(
    <div className='loginpage'>
    <div className='loginbox'>
            <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
            <input id='username' type='text' placeholder='Enter your username here' className='form username' />
            <input id='password' type='password' placeholder='Enter your password here' className='form password' />
            <button className="login" onClick={() => {props.loginFcn(), routeChange()}}>
                <i className="fas fa-sign-in-alt" >Login</i>
            </button>
    </div>
  </div>
  )
}

export default LoginPage