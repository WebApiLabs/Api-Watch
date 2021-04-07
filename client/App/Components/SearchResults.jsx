import React from 'react';
import Results from './Results.jsx'

class SearchResults extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const jsonRender = JSON.stringify(this.props.apiInfo.results, null, 2);
        let jsonResults = <Results jsonRender = {jsonRender}/>
      return(
        <table className='table' >
          <tbody>
            <tr>
              <td className='datainformation'>
                <p className='datainformation'>API: {this.props.apiInfo.api} </p>
                <p className='datainformation'>Time: {this.props.apiInfo.time}</p>
                <div className='datainformation'>Results: {jsonResults}</div>
              </td>
            </tr>
          </tbody>
        </table>
      )
    }
}

export default SearchResults
