import React from 'react'
import SignupButton from '../Components/SignupButton.jsx'
import LoginButton from '../Components/LoginButton.jsx'
import { Link } from 'react-router-dom'

class RibbonContainer extends React.Component{
  constructor(props){
    super(props)


  }
  
  render(){
      return(
          <div className='ribboncontainer'>
          {/* <h1>username</h1>
            <input className="usertext" type="text" />
          <h2>password</h2>
          <input className="classtext"type="text" /> */}

          {this.props.loginFail ? <SignupButton /> : null}
  
          {this.props.loginFail ? <LoginButton /> : null}

          </div>
      )
  }
}

export default RibbonContainer