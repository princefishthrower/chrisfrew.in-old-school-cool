// css
require('normalize.css/normalize.css');
require('styles/Professional.css');
require('../../node_modules/font-awesome/css/font-awesome.css');

// react
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

// images
var pi = require("../images/Professional/pinewnew.png");
var chris = require("../images/Professional/chris.png");

// 3rd party js
var hljs = require("../assets/js/highlight.min.js");
//var snowstorm = require("../assets/js/snowstorm.js");

// pdfs
import cv_en from "../assets/pdf/Frewin_CV_English.pdf";
import cv_de from "../assets/pdf/Frewin_CV_Deutsch.pdf";

class Professional extends React.Component {
  render () {
    return (
      <div>
        <div id="ghost">
      		<pi title="Hosted via Raspberry Pi + Apache2" style={{position: 'fixed', left: '5px', top: '100px', zIindex: 99999999999, border: 'none'}} target="_blank"><img src={pi} width="140"/></pi>
      	</div>

      	<div className="container-info">
      		<a name="top-mobile"></a>
      		<div className="info-main">
      			<div className="info__headshot">
              <img className="info__headshot-img" src={chris}/>
            </div>
      			<div className="info__elevator">
      				<h1 className="info__elevator-text">
      						I'm Chris, a full stack developer currently focused in SAPUI5 and ABAP.<br/><br/><span style={{fontSize: '30px'}}>I work in Liechtenstein and live in Austria.</span><br/><br/><span style={{fontSize: '20px'}}>View the <Link to="/fun">Old, Fun Site.</Link></span>
      				</h1>
      			</div>
      		</div>
      		<div className="info-footer">
      			<div className="info-footer__social">
      				<a href="https://github.com/frewinchristopher" target="_blank" className="fa fa-github info-footer__social-icon--github"></a>
      				<a href="https://bitbucket.org/guitarshreder07" target="_blank" className="fa fa-bitbucket info-footer__social-icon--github"></a>
      				<a href="https://www.linkedin.com/in/frewinchristopher" target="_blank" className="fa fa-linkedin info-footer__social-icon--linkedin"></a>
      			</div>
      		</div>
      	</div>

      	<div className="container-main">
      		<a name="top-desktop"></a>
      		<div className="main__container-about">
      			<div className="main__tag">About Me</div>
      			<p className="main__copy">
      				My current position is developing and supervising SAP modules, specializing in Extended Warehouse Managment (EWM). However, I enjoy web development and other coding projects in my free time, and as such software engineering is my greatest skill. I am
      				skilled in the following languages:
      			</p>
            <ul className="main__list">
      				<li className="main__list-item">Bash and Unix Tools <pre><code className="bash hljs">echo "Hello world"</code></pre></li>
      				<li className="main__list-item">Perl <pre><code className="perl hljs">$myScalar = pop(@myArray);</code></pre></li>
      				<li className="main__list-item">Python <pre><code className="python hljs">bob, fred, jim = 5, "Fred", 4.0</code></pre></li>
      				<li className="main__list-item">Fortran <pre><code className="fortran hljs">real, allocatable :: myarray = (:,:)</code></pre></li>
      				<li className="main__list-item">LaTeX <pre><code className="latex hljs">\begin{'{tabular}'}{'{ | l | c | r | }'}</code></pre></li>
      				<li className="main__list-item">HTML <pre><code className="html hljs">{'<h1>My Awesome Title</h1>'}</code></pre></li>
      				<li className="main__list-item">CSS <pre><code className="css hljs">@media (min-width: 768px) {'{ position : fixed; }'}</code></pre></li>
      				<li className="main__list-item">JavaScript <pre><code className="javascript hljs">window.setTimeout(myFunction, 1000);</code></pre></li>
      				<li className="main__list-item">JQuery <pre><code className="javascript hljs">myBlueElements = $(this).css('color', 'blue');</code></pre></li>
      				<li className="main__list-item">PHP <pre><code className="php hljs">myString.explode(',')</code></pre></li>
      				<li className="main__list-item">MySQL <pre><code className="sql hljs">SELECT * FROM cool_table;</code></pre></li>
              <li className="main__list-item">Postgresql <pre><code className="sql hljs">SELECT * FROM cool_table;</code></pre></li>
              <li className="main__list-item">ABAP <pre><code className="abap hljs">LOOP AT it_itab ASSIGNING {'<fs_itab>'}</code></pre></li>
      				<li className="main__list-item">MongoDB <pre><code className="javascript hljs">{'db.find({\'age\' : 50})'}</code></pre></li>
      			</ul>
      		</div>

      		<div className="main__container-experience">
      			<div className="main__tag">Education</div>
      			<div className="main__experience">
      				<div className="main__experience-info">
      					<div className="main__experience-info-company">Cornell University</div>
      					<div className="main__experience-info-position">M.S. Mechanical Engineering</div>
      				</div>
      				<div className="main__experience-year">February 2015</div>
      			</div>
      			<div className="main__experience">
      				<div className="main__experience-info">
      					<div className="main__experience-info-company">Clarkson University</div>
      					<div className="main__experience-info-position">B.S. Mechanical Engineering</div>
      					<div className="main__experience-info-position">B.S. Physics</div>
      				</div>
      				<div className="main__experience-year">May 2014</div>
      			</div>
      		</div>

      		<div className="main__container-experience">
      			<div className="main__tag">Hobbies</div>
      			<div className="main__experience">
      				<div className="main__experience-info-company">The Great Outdoors</div>
      				<div className="main__experience-info-position">Hiking, skiing, via ferrata (iron rope climbing course), and mountain biking.</div>
      			</div>
      			<div className="main__experience">
      				<div className="main__experience-info-company">The Arts</div>
      				<div className="main__experience-info-position">Reading, writing, drawing and painting.</div>
      			</div>
      			<div className="main__experience">
      				<div className="main__experience-info-company">Current Events</div>
      				<div className="main__experience-info-position">Clean / renewable energy, particle physics, new technologies.</div>
      				<br/>
      			</div>
      			<div className="main__experience">
      				<div className="main__experience-info-company">Miscellanous</div>
      				<div className="main__experience-info-position">Big Formula 1 and soccer fan.</div>
      			</div>
      		</div>

      		<div className="main__container-resume">
      			<h2 className="main__resume"><a href={cv_en} target="_blank">CV (English)</a></h2>
      			<h2 className="main__resume"><a href={cv_de} target="_blank">CV (Deutsch)</a></h2>
      		</div>

      	</div>
      </div>
    )
  }
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }
}

export default Professional;
