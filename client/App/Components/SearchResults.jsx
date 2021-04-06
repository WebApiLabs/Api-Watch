import React from 'react';

class SearchResults extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        console.log("props", this.props)
    return(
         <table className='table' >
                <tbody>
                    <tr>
                        <td className='datainformation'>
                             <p className='datainformation'>Book Title: {this.props.books.title} </p>
                             <p className='datainformation'>Author: {this.props.books.author}</p>
                            <p className='datainformation'>API: {this.props.books.selfLink}</p>
                            {/* <p className='title'>Hello </p>
                             <p className='author'>This</p>
                            <p className='selfLink'>Renders</p> */}
                        </td>
                    </tr>
                </tbody>
            </table>
    )
    }
}

export default SearchResults