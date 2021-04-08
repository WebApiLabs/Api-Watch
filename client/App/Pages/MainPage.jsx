import React from 'react';
import SearchContainer from '../Containers/SearchContainer';
import RibbonContainer from '../Containers/RibbonContainer';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainpage">
        <div className="header">
          <RibbonContainer loginFail={this.props.loginFail} />
        </div>
        <div className="title">
          <h2>API Gateway</h2>
        </div>
        <div className="body">
          <SearchContainer />
        </div>
      </div>
    )
  }
}

export default MainPage;
