import React from 'react';
import Results from './Results';

const SearchResults = (props) => {
  const { results } = props.apiInfo;
  const jsonRender = JSON.stringify(results, null, 2);
  const jsonResults = <Results jsonRender={jsonRender} />;

  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="datainformation">
            <p className="datainformation">
              <b>Name: </b>
              {' ' +props.apiInfo.api}
            </p>
            <p className="datainformation">
              <b>Response Time:</b> 
              {' ' +props.apiInfo.time}
            </p>
            <p className="datainformation">
              <b>Data Type: </b>
              {' ' +props.apiInfo.contentType}
            </p>
            <p className="datainformation">
              <b>Number of Results: </b>
              {' ' +props.apiInfo.numResults}
            </p>
            <p className="datainformation">
              <b>Pricing:</b> 
              {' ' +props.apiInfo.accessibility}
            </p>
            <div className="jsonTable">
              <b>Results: </b>
              {jsonResults}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
