//require("../../../assets/css/bootstrap.min.css");
//require("../../../assets/css/grayscale.css");

import React, { PropTypes } from 'react';
var $ = require("jquery");

// mp3
let epic = require('../../../assets/mp3/epic.mp3');

// images
let chrisround = require("../../../images/epic-de/chrisround.png");
let coder = require("../../../images/epic-de/coder.jpg");
let fortran = require("../../../images/epic-de/fortran.png");
let git = require("../../../images/epic-de/git.png");
let latex = require("../../../images/epic-de/latex.png");
let matlab = require("../../../images/epic-de/matlab.png");
let sap = require("../../../images/epic-de/sap.jpg");
let whatsnext = require("../../../images/epic-de/whatsnext.jpg");

class EpicDe extends React.Component {
  constructor() {
    super();
    this.stopEpisch = this.stopEpisch.bind(this);
  }
  stopEpisch() {
    document.getElementById("episch").pause();
  }
  render () {
    // <audio id="epic" controls>
    //     <source src={epic} type="audio/mpeg"/>
    // </audio>
    // <style>
    //     audio {{visibility: 'hidden'}}
    // </style>
    return (
      <div>
        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div id="ghost">

                        <p className="credentialsmessage" style={{marginTop:'6cm',marginBottom:'15cm'}}></p>

                            <div className="codecontainer" style={{position:'relative'}}>
                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-perl size-60" style={{color:'gray',fontSize:'2em'}}></i><br/><div className="monokaired">Perl</div> <br/> (1 Jahr <div className="monokaired">tÃ¤glichen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <img src={matlab} width="40px"/><br/><div className="monokaiblue">MATLAB</div> <br/> (5 Jahre <div className="monokaiorange">frequent</div><br/>Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-python size-60" style={{color:'darkblue',fontSize:'2em'}}></i><br/><div className="monokaiblue">Python</div><br/> (2 Jahre <div className="monokaired">tÃ¤glichen</div><br/>Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-html size-60" style={{color:'gray',fontSize:'2e'}}></i><br/><div className="monokaipurple">HTML</div> <br/>(3 Jahre <div className="monokaiorange">hÃ¤ufigen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <img src={fortran} width="40px"/><br/><div className="monokaigreen">Fortran</div> <br/> (1 Jahr <div className="monokaipurple">moderate</div><br/>Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-javascript size-60" style={{color:'gold',fontSize:'2em'}}></i><br/><div className="monokaiyellow">JavaScript</div> <br/> (4 Monate <div className="monokaiorange">hÃ¤ufigen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <img src={latex} width="40px"/><br/><div className="monokaiorange">LaTeX</div> <br/> (2 Jahre <div className="monokaired">tÃ¤glichen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-mysql size-60" style={{color:'lightseagreen',fontSize:'2em'}}></i><br/><div className="monokaiblue">MySQL</div> <br/> (6 Monate <div className="monokaipurple">moderate</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-php size-60" style={{color:'steelblue',fontSize:'2em'}}></i><br/><div className="monokaigreen">PHP</div> <br/> (6 Monate <div className="monokaipurple">moderate</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-css size-60" style={{color:'orange',fontSize:'2em'}}></i><br/><div className="monokaired">CSS</div> <br/> (3 Jahre <div className="monokaiorange">hÃ¤ufigen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <img src={git} width="40px"/><br/><br/><div className="monokaiblue">Git</div> <br/> (2 Jahre <div className="monokaiorange">hÃ¤ufigen</div><br/>Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    <img src={sap} width="45px"/><br/><br/><div className="monokaiblue">SAP ERP &amp, EWP</div> <br/> (2 Wochen <div className="monokaiorange">Anfanger</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    <i className="step icon-shell size-60" style={{color:'white',fontSize:'2em'}}></i><br/><div className="monokaiyellow">Bash &amp, Unix Tools</div> <br/> (1 year <div className="monokaired">tÃ¤glichen</div> Nutzung)
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    "He's done more work on my code than I thought any graduate student would or <i>could</i> ever do." <br/><div className="monokaired">- Perrine Pepiot, Ph.D., Professor at Cornell</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    "He's perhaps the <i>best</i> programmer I've ever worked with." <br/><div className="monokaired">- Devon Jedamski, MIT M.S. Graduate</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'800px',opacity:0,position:'absolute'}}>
                                    "He's a boss!" <br/><div className="monokaired">- Freddy Oakes, Software Engineer at G.M.</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'-800px',opacity:0,position:'absolute'}}>
                                    "He's smarter than I am." <br/><div className="monokaired">- Ben Petroski, M.S. Stanford graduate</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'auto',marginRight:'auto',opacity:0,position:'absolute'}}>
                                    <div className="monokaired">BEACHTEN SIE MEINE KENTNISSEN.</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'auto',marginRight:'auto',opacity:0,position:'absolute'}}>
                                    <div className="monokaired">ICH BIN UNÃœBERTROFFEN.</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'auto',marginRight:'auto',opacity:0,position:'absolute'}}>
                                    <div className="monokaired">ICH HEISSE...</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'auto',marginRight:'auto',opacity:0,position:'absolute'}}>
                                    <div className="monokaired">NOCH EINMAL... ICH HEISSE...</div>
                                </div>

                                <div className="code" style={{marginTop:'-15cm',marginLeft:'auto',marginRight:'auto',opacity:0,position:'absolute'}}>
                                    <div id = "sweeper1" style={{fontSize:'80px'}}>CHRISTOPHER FREWIN.</div>
                                </div>
                            </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="animatedtable">
                            <img src={chrisround} width="250px"/>
                            <br/>
                            <br/>
                            <p>Das bin ich - Clarkson UniversitÃ¤t Graduation, Mai 2014.
                            <br/>
                            Wie Sie wahrscheinlich jetzt sehen,
                            <br/>
                            <b id="sweeper2">Ich &hearts; Codierung und Software-Entwicklung.</b></p>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="animatedtable">
                            <p>Weltreisende bis zum Tag...</p>
                        </div>
                        <div className="animatedtable">
                            <img src={whatsnext} width="650px"/>
                        </div>
                        <div className="animatedtable">
                            <br/>
                            <br/>
                            <p>...Insomniac Coder bei Nacht ðŸ˜Ž</p>
                        </div>
                        <div className="animatedtable">
                            <img src={coder} width="250px"/>
                        </div>
                        <div className="animatedtable">
                            <br/>
                            <a onClick={this.stopEpisch} style={{color:'red'}}>SCHALT DIE SCHEISSE AUS!!!</a>
                            <br/>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
  }
  componentDidMount() {
    $(document).ready(function(){
        var messageflag = 0;

        $('.credentialsmessage').css({ opacity: 0 });

        $(window).scroll(function(){

            if ($(window).scrollTop() > 300 && messageflag == 0){
                // document.getElementById("epic").play();
            }

            if ($(window).scrollTop() > 800 && messageflag == 0){
                $('.credentialsmessage').fadeTo(1000,1);
                $('.credentialsmessage').html("<i>\"...Manchmal hat ein Kandidat die perfekten Voraussetzungen...</i>");
                $('.credentialsmessage').delay(2500).fadeTo(1000,0);

                window.setTimeout(a1,6000)

                function a1() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ich bin dieser Kandidat...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);

                    window.setTimeout(a2,6000);
                }
                function a2() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...betrachten Sie mein KÃ¶nigreich...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a3,6000);
                }
                function a3() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...und hÃ¶ren Sie meine Geschichte...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a4,6000);
                }
                function a4() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...es gab einmal einen Jungen...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a5,6000);
                }
                function a5() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...einen Jungen der hatte nichts...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a6,6000);
                }
                function a6() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...dieser Junge wuchs heran...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a7,6000);
                }
                function a7() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...und wurde ein Meister...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a8,6000);
                }
                function a8() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ein Meister in allem...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a9,6000);
                }
                function a9() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ein Meister mit perkeften Kenntnissen...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a10,6000);
                }
                function a10() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ein Held der Welt...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a11,6000);
                }
                function a11() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...'Was waren seine Kenntnisse?', fragen Sie sich...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a12,6000);
                }
                function a12() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...Naja, er war ein PROGRAMMIERER...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a13,6000);
                }
                function a13() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ein Entwickler direkt vom Himmel...</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(a14,6000);
                }
                function a14() {
                    $('.credentialsmessage').fadeTo(1000,1);
                    $('.credentialsmessage').html("<i>...ein Meister unserer Zeit....\"</i>");
                    $('.credentialsmessage').delay(2500).fadeTo(1000,0);
                    window.setTimeout(codeLooper,4500);
                }

                function codeLooper() {

                    // make it a big font
                    $('.code').addClass("biggerfont");

                    // following 5 lines make each code block have a fixed size
                    $('.code').css("width", "400px");
                    $('.code').css("max-width", "400px");
                    $('.code').css("height", "350px");
                    $('.code').css("max-height", "350px");
                    $('.code').css("display", "inline-block");

                    var codes = $('.code'); // get all elements in table
                    var codeNum = 0;
                    var duration;
                    loopHelper();

                    function loopHelper() {

                        function randomIntFromInterval(min,max)
                        {
                            return Math.floor(Math.random()*(max-min+1)+min);
                        }

                        if (codeNum != codes.length) {

                            if (codeNum > codes.length-10) { // last 5 messages should have a longer duration
                                duration = 3500;
                            }
                            else {
                                duration = 750;
                            }

                            console.log("codeNum is:" + codeNum);

                            var margin = randomIntFromInterval(-200,200); // random number between -200 and 200
                            var marginpx = margin.toString();
                            var marginamount = marginpx.concat("px");

                            var topmargin = randomIntFromInterval(-50,50); // random number between -50 and 50
                            var topmarginpx = topmargin.toString();
                            var topmarginamount = topmarginpx.concat("px");
                            $(codes[codeNum]).css("top-margin", topmarginamount);

                            console.log(marginamount);

                            $(codes[codeNum]).fadeTo(duration/2, 1); // fade in
                            $(codes[codeNum]).animate( { 'margin-left' : marginamount, easing : "easeInOutCubic"}, duration) // animate!
                            $(codes[codeNum]).fadeTo(duration,0); // fade out
                            $(codes[codeNum]).animate({height: "0px"}); // shrink div


                            codeNum = codeNum + 1; // move on to the next code

                            window.setTimeout(loopHelper,duration*2); // do it to the next code!
                        }
                        else {
                            //$(codes[codeNum]).fadeTo(3500,0); // fade out super slow

                            $(codes[codeNum]).animate({fontSize: "400px"});
                            $(codes[codeNum]).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

                            window.setTimeout(flash, 3500);

                            var i = 0;

                            function flash() {
                                if (i != codes.length-9) {
                                    $(codes[i]).fadeTo(350,1);
                                    $(codes[i]).fadeTo(300,0);
                                    i = i + 1;
                                    window.setTimeout(flash, 350);
                                }
                            }

                        }
                    }
                }

                messageflag = 1;
            }
        });
    });
  }
}

export default EpicDe;
