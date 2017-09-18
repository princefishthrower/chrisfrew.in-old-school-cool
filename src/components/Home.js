// css
require('normalize.css/normalize.css');
require('../assets/css/monokai.css');
require('styles/Home.css');

// react
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

// images
var professional = require("../images/Home/professional.png");
var design = require("../images/Home/design.png");
var fun = require("../images/Home/fun.png");
var sirenapparel = require("../images/Home/sirenapparel.png");
var codepen = require("../images/Home/codepen.png");
var github = require("../images/Home/github.png");
var githubio = require("../images/Home/githubio.png");
var wallstreetbetswally = require("../images/Home/wallstreetbetswally.png");
var worldhappinessmeter = require("../images/Home/worldhappinessmeter.png");

class Home extends React.Component {
  render () {
        return (
          <div>
          <div className="container"/>
          <h1>Select a site.</h1>
          <div className="siteContainer">
            <div className="flexBox">
              <ul>
                <li>
                  <div className="site">
                    <Link to="/professional">
                      <h2>Professional.</h2>
                      <img src={professional} className="site-image" alt="My Professional Site" width="200px" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://chrisfrewin.design">
                      <h2>Design.</h2>
                      <img src={design} className="site-image" alt="My Design Site" width="200px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <Link to="/fun">
                      <h2>Fun. :)</h2>
                      <img src={fun} className="site-image" alt="My Fun Site" width="200px" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://sirenapparel.us">
                      <h2>Siren Apparel</h2>
                      <img src={sirenapparel} className="site-image" alt="Siren Apparel - My Clothing Company" width="200px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h2>Other Places & Apps</h2>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://codepen.io/galt">
                      <h4>Codepen.io</h4>
                      <img src={codepen} className="site-image" alt="Codepen.io" width="100px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://github.com/frewinchristopher">
                      <h4>Github</h4>
                      <img src={github} className="site-image" alt="Github" width="100px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://frewinchristopher.codepen.io">
                      <h4>Github.io<br/>(Github Pages)</h4>
                      <img src={githubio} className="site-image" alt="Github" width="100px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://wallstreetbetswally.codepen.io">
                      <h4>WallStreetBets<br/>Wally</h4>
                      <img src={wallstreetbetswally} className="site-image" alt="WallStreetBets Wally" width="100px" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="site">
                    <a href="https://worldhappinessmeter.chrisfrew.in">
                      <h4>World<br/>Happiness<br/>Meter</h4>
                      <img src={worldhappinessmeter} className="site-image" alt="World Happiness Meter" width="100px" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </div>
        );
      }
    }

export default Home;
