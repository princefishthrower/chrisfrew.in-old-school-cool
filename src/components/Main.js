import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AssetIncluder from './AssetIncluder';
import Home from './Home';
import Professional from './Professional';
//import Fun from './Fun';
import EpicDe from './features/epic-de/EpicDe';

// pdfs
import loading from "../assets/json/loading.json";

class AppComponent extends React.Component {
  render() {
    // <Route path="/features/abap-web-ide" component={Fun}></Route>
    // <Route path="/features/beer-list" component={Fun}></Route>
    // <Route path="/features/boston-weather" component={Fun}></Route>
    // <Route path="/features/epic-en" component={EpicEn}></Route>
    // <Route path="/features/human-genome" component={Fun}></Route>
    // <Route path="/features/rap-helper" component={Fun}></Route>
    // <Route path="/features/ski-monitor" component={Fun}></Route>
    // <Route path="/features/stock-o-matic" component={Fun}></Route>
    // <Route path="/features/u-pursuit" component={Fun}></Route>
    //<Route path="/fun" component={Fun}></Route>
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/professional" component={Professional}></Route>

          <Route path="/features/epic-de" component={EpicDe}></Route>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
