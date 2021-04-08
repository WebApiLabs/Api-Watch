import React from 'react';
import SearchBar from '../Components/SearchBar';
import SearchResults from '../Components/SearchResults';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiInfo: [],
      searchResults: null,
    };

    this.performSearch = this.performSearch.bind(this);
  }

  // make fetch request here?
  // requesting to back end, not the API
  // API fetch logic happens at backend
  // prop drill response into to search results
  performSearch(string) {
    const tempArray = string.split(' ').filter((el) => el !== '');
    const updatedString = tempArray.join('+');
    const sendObj = { updatedString };
    const requestBody = {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },

      body: JSON.stringify(sendObj),
    };

    fetch('/search', requestBody)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received from backend: ', data[0]);
        // create a deep copy of the current state
        const updatedState = JSON.parse(JSON.stringify(this.state));
        const infoArray = [];
        data.forEach((element) => {
          const infoObj = {
            api: element.api,
            time: element.time,
            results: element.results,
          };
          infoArray.push(infoObj);
        });
        updatedState.apiInfo = infoArray;
        this.setState(updatedState);
      })
      .catch((err) => console.log(err));
  }

  render() {
    // container array
    // made a for loop for each thing i got from my fetch
    // <SearchResults booktite=data.title/>
    // render container array in the return statement
    const rowsArray = [];
    const { apiInfo } = this.state;
    for (let i = 0; i < apiInfo.length; i += 1) {
      rowsArray.push(<SearchResults key={i} apiInfo={apiInfo[i]} />);
    }

    return (
      <div className="searchcontainer">
        <SearchBar onEnter={this.performSearch} />
        <div className="searchresults">
          {rowsArray}
        </div>
      </div>
    );
  }
}

export default SearchContainer;
