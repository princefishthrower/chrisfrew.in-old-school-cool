import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Professional from './Professional';
import Fun from './Fun';


class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/professional" component={Professional}></Route>
          <Route path="/fun" component={Fun}></Route>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
