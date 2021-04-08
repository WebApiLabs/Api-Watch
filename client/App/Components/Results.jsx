import React from 'react';

class Results extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        showResult : '',
        isShowing: false,
        buttonText: 'Show Results'
      }
      this.buttonFunc = this.buttonFunc.bind(this)      
  }

  buttonFunc () {
    if (this.state.isShowing === false) {  
        const tempState = JSON.parse(JSON.stringify(this.state));
        tempState.showResult = this.props.jsonRender;
        tempState.isShowing = true;
        tempState.buttonText = 'Hide Results';
        this.setState(tempState);
    } else {
        const tempState = JSON.parse(JSON.stringify(this.state));
        tempState.showResult = '';
        tempState.isShowing = false;        
        tempState.buttonText = 'Show Results';
        this.setState(tempState);
    }
  }
  
  render(){
    return(
      <div className = 'individualResults'>
        <button onClick={this.buttonFunc}>{this.state.buttonText}</button>
        <pre className="custom-json-pretty">{this.state.showResult}</pre>
      </div>
    )
  }
}

export default Results;