import React from 'react'
import { useHistory } from 'react-router'

const SignupPage = (props) => {
  const history = useHistory();
  const routeChange=()=> {
    let path = `/`;
    history.push(path);
  }

  const doSignUp = () => {
    let userStr = document.getElementById('username').value;
    let pwStr = document.getElementById('password').value;

    // debugging
    console.log('Signup Initiated.')
    console.log(`Username: ${userStr}, Password: ${pwStr}`)

    // get ride of whitespaces from login
    userStr.replace(/\s+$/, '');
    
    const sendObj = {'username':userStr, 'password': pwStr}
    let requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // headers: {'Content-Type': 'text/javascript'},
      // body: JSON.stringify(updatedString)
      body: JSON.stringify(sendObj)
    }
  
    // ping the backend with the 
    fetch('/signup', requestBody) 
      .then(response => response.text())
      .then(data => console.log('Data received from backend: ', data))
      .catch(err => console.log(err))
  }

  return(
    <div className='signuppage'>
    <div className='signupbox'>
         <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
         <input id = 'username' type='text' name='username' placeholder='Enter new username here' className='form'/>
         <input id='password' type='password' name='password' placeholder='Enter new password here' className='form'/>
         <button className="login" onClick={() => {doSignUp(), routeChange()}}>
                <i className="fas fa-sign-in-alt" >Sign up</i>
            </button>
     </div>
   </div>
  )
}   // get ride of whitespaces from login

export default SignupPage 


  
  // render(){
  //     return(
  //         <div className='signuppage'>
  //           <div className='signupbox'>
  //               <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
  //               <input id='username' type='text' name='username' placeholder='Enter new username here' className='form' onKeyPress={(e) => {if (e.key==='Enter') this.doSignUp()}}/>
  //               <input id='password' type='password' name='password' placeholder='Enter new password here' className='form' onKeyPress={(e) => {if (e.key==='Enter') this.doSignUp()}}/>
  //           </div>
  //         </div>
  //     )
  // }
