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
              Name of API:
              {this.props.apiInfo.api}
            </p>
            <p className="datainformation">
              Response Time:
              {this.props.apiInfo.time}
            </p>
            <div className="datainformation">
              Results:
              {jsonResults}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
