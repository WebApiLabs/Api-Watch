import React from 'react'
import SearchContainer from '../Containers/SearchContainer.jsx'
import RibbonContainer from '../Containers/RibbonContainer.jsx';

class MainPage extends React.Component{
  constructor(props){
    super(props)

    
  }
  
  render(){
      return(
          <div className='mainpage'>
          <div className='header'>
              <RibbonContainer loginFail={this.props.loginFail}/>
          </div>
        <div className='title'>
          <h2>API Gateway</h2>
          </div>
        <div className='body'>
            <SearchContainer/>
        </div>
          </div> 
      // eslint-disable-next-line semi
      )
  }
}

export default MainPage