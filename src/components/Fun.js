import React, { PropTypes } from 'react'

// 3rd party javascript
require("../assets/js/jquery.js");
require("../assets/js/bootstrap.min.js");
require("../assets/js/jquery.easing.min.js");
require("../assets/js/grayscale.js");
require("../assets/js/lettering.js");
require("../assets/js/jquery.textillate.js");
require("../assets/js/modernizr-2.0.6.js");
require("../assets/js/lightjar.js");
require("../assets/js/sweep.min.js");
require("../assets/js/terminal.min.js");
require("../assets/js/bug-min.js");

// audio
var hello = require("../assets/audio/hello.mp3" );
var creak = require("../assets/audio/creak.mp3" );
var swoosh = require("../assets/audio/swoosh.mp3" );
var barrelroll = require("../assets/audio/barrelroll.m4a");
var mrdorfmam = require("../assets/audio/mrdorfman.m4a");
var peter = require("../assets/audio/peter.m4a");
var solo = require("../assets/audio/solo.mp3");
var go = require("../assets/audio/go.mp3");
var freeze = require("../assets/audio/freeze.mp3");
var ninur = require("../assets/audio/ninur.mp3");

// 3rd party css

// images
var pinewnew = require("../images/Fun/pinewnew.png");
var at = require("../images/Fun/at.png");
var de = require("../images/Fun/de.png");
var chrisround = require("../images/Fun/chrisround.png");
var cornell = require("../images/Fun/cornell.png");
var matlab = require("../images/Fun/matlab.png");
var fortran = require("../images/Fun/fortran.png");
var latex = require("../images/Fun/latex.png");
var git = require("../images/Fun/git.png");
var chrisround = require("../images/Fun/chrisround.png");
var whatsnext = require("../images/Fun/whatsnext.jpg");
var coder = require("../images/Fun/coder.jpg");
var tracer_develop_repo = require("../images/Fun/tracer_develop_repo.jpg");
var fortyer = require("../images/Fun/46er.png");
var torontomarathon = require("../images/Fun/torontomarathon.jpg");

class Fun extends React.Component {
  constructor() {
    super();
    $('.tlt').css('visibility','visible');
    $('.tltaboutme').css('visibility','hidden');
    $('.tltwork').css('visibility','hidden');
    $('.tltcool').css('visibility','hidden');
    $('.tltcontact').css('visibility','hidden');
    var browser = navigator ? navigator.userAgent.toLowerCase() : "other";
    if (browser.indexOf(".net") > -1) {
        window.alert("Dude........... Seriously?!\nInternet Explorer is NO good.\nGet Chrome.");
        window.open("http://lmgtfy.com/?q=download+google+chrome&l=1", name = "_self", fullscreen="yes");
    }
    $(function () {
        $('.tlt').textillate();
        $('.blackbox').fadeTo(4000,0);

        //window.setTimeout(mydrop,6000);
        window.setTimeout(secondtext,5000);

        function mydrop() {
            loopgradient();
            $('.dropandspin').slideDown(2000);
        }

        function secondtext() {
            $('.intro-text').addClass('visiblefade'); // let it rip!
            $('.btn').addClass('visiblefade'); // let it rip!
            $('.dropandspin').addClass('visiblefade'); // let it rip!

            $('.intro-text').removeClass('hiddenfade'); // clear opacity in-line style
            $('.btn').removeClass('hiddenfade'); // let it rip!
            $('.dropandspin').removeClass('hiddenfade'); // let it rip!
        }

    })
    var sweeper1 = document.querySelector('#sweeper1');
    function loop1() {
        sweep(sweeper1, 'color', '#66D9EF', '#66D9EE', {callback: loop1, direction: 1, duration: 7500});
    }
    loop1();

    var sweeper2 = document.querySelector('#sweeper2');
    function loop2() {
        sweep(sweeper2, 'color', '#66D9EF', '#66D9EE', {callback: loop2, direction: 1, duration: 5000});
    }
    loop2();

    var sweeper3 = document.querySelector('#sweeper3');
    function loop3() {
        sweep(sweeper3, 'color', '#66D9EF', '#66D9EE', {callback: loop3, direction: 1, duration: 5000});
    }
    loop3();

    // music player
    document.getElementById("solo").onclick = solo;
    document.getElementById("go").onclick = go;
    document.getElementById("freeze").onclick = freeze;
    document.getElementById("ninur").onclick = ninur;
    document.getElementById("off").onclick = off;

    function solo() {
        document.getElementById("sweeper3").innerHTML = "MUSIC";
        document.getElementById("solo").style.color = "#A6E22E";
        document.getElementById("go").style.color = "#66D9EF";
        document.getElementById("ninur").style.color = "#66D9EF";
        document.getElementById("freeze").style.color = "#66D9EF";
        document.getElementById("soloplayer").currentTime = 0;
        document.getElementById("soloplayer").play();
        document.getElementById("goplayer").pause();
        document.getElementById("freezeplayer").pause();

    }

    function go() {
        document.getElementById("sweeper3").innerHTML = "MUSIC";
        document.getElementById("go").style.color = "#A6E22E";
        document.getElementById("solo").style.color = "#66D9EF";
        document.getElementById("freeze").style.color = "#66D9EF";
        document.getElementById("ninur").style.color = "#66D9EF";
        document.getElementById("goplayer").currentTime = 0;
        document.getElementById("goplayer").play();
        document.getElementById("soloplayer").pause();
        document.getElementById("freezeplayer").pause();
        document.getElementById("ninurplayer").pause();
    }

    function freeze() {
        document.getElementById("sweeper3").innerHTML = "MUSIC";
        document.getElementById("go").style.color = "#66D9EF";
        document.getElementById("solo").style.color = "#66D9EF";
        document.getElementById("freeze").style.color = "#A6E22E";
        document.getElementById("ninur").style.color = "#66D9EF";
        document.getElementById("freezeplayer").currentTime = 0;
        document.getElementById("soloplayer").pause();
        document.getElementById("goplayer").pause();
        document.getElementById("ninurplayer").pause();
        document.getElementById("freezeplayer").play();
    }

    function ninur() {
        document.getElementById("sweeper3").innerHTML = "MUSIC";
        document.getElementById("go").style.color = "#66D9EF";
        document.getElementById("solo").style.color = "#66D9EF";
        document.getElementById("freeze").style.color = "#66D9EF";
        document.getElementById("ninur").style.color = "#A6E22E";
        document.getElementById("soloplayer").pause();
        document.getElementById("goplayer").pause();
        document.getElementById("freezeplayer").pause();
        document.getElementById("ninurplayer").currentTime = 0;
        document.getElementById("ninurplayer").play();
    }

    function off() {
        document.getElementById("go").style.color = "#66D9EF";
        document.getElementById("solo").style.color = "#66D9EF";
        document.getElementById("freeze").style.color = "#66D9EF";
        document.getElementById("ninur").style.color = "#66D9EF";
        document.getElementById("soloplayer").pause();
        document.getElementById("goplayer").pause();
        document.getElementById("freezeplayer").pause();
        document.getElementById("ninurplayer").pause();
    }

    function showBottom() {
        $('#hidebottom').show();
        $('.hidecontinuemessage').hide();
        var y = $(window).scrollTop();
        $("html, body").animate({ scrollTop: y + $(window).height() + 105 }, 1000);
    }

    $(document).ready(function(){

        $('#hidebottom').hide();

        messageflag = 0;

        $('.animatedtable').css({ opacity: 0 }); // make the table and message completely opaque once the page exists
        $('.credentialsmessage').css({ opacity: 0 });

        $(window).scroll(function(){
            if ($(window).scrollTop() > 400){
                $('.tltaboutme').css('visibility','visible');
                $('.tltaboutme').textillate();
            }
            if ($(window).scrollTop() > 2400){
                $('.tltwork').css('visibility','visible');
                $('.tltwork').textillate();
            }
            if ($(window).scrollTop() > 4600){
                $('.tltcool').css('visibility','visible');
                $('.tltcool').textillate();
            }
            if ($(window).scrollTop() > 6700){
                $('.tltcontact').css('visibility','visible');
                $('.tltcontact').textillate();
            }
            if ($(window).scrollTop() > 800 && messageflag == 0){
                $('.credentialsmessage').fadeTo(1500,1);
                $('.credentialsmessage').html("<i>\"...Sometimes a candidate has all the perfect credentials...</i>");
                $('.credentialsmessage').delay(1000).fadeTo(800,0);
                window.setTimeout(first,3500)
                function first() {
                    $('.credentialsmessage').fadeTo(800,1);
                    $('.credentialsmessage').html("<i>...I am that candidate...</i>");
                    $('.credentialsmessage').delay(1000).fadeTo(800,0);

                    window.setTimeout(second,3500);
                }
                function second() {
                    $('.credentialsmessage').fadeTo(800,1);
                    $('.credentialsmessage').html("<i>...observe my kingdom...</i>");
                    $('.credentialsmessage').delay(1000).fadeTo(800,0);
                    window.setTimeout(third,3500);
                }
                function third() {
                    $('.credentialsmessage').fadeTo(800,1);
                    $('.credentialsmessage').html("<i>...and listen to my story...\"</i>");
                    $('.credentialsmessage').delay(1000).fadeTo(800,0);
                    window.setTimeout(fourth,3500);
                }
                function fourth() {
                    $('.credentialsmessage').fadeTo(800,0); // fade out message
                    $('.credentialsmessage').delay(1000).remove()
                    window.setTimeout(fifth,100);
                }
                function fifth() {
                    tablelements = $('.animatedtable');
                    $(tablelements[0]).fadeTo(1200, 1); // unfold the table!
                    $(tablelements[1]).delay(800).fadeTo(1200, 1);
                    $(tablelements[2]).delay(1600).fadeTo(1200, 1);
                    $(tablelements[3]).delay(2400).fadeTo(1200, 1);
                    $(tablelements[4]).delay(3200).fadeTo(1200, 1);
                    $(tablelements[5]).delay(4000).fadeTo(1200, 1);
                    $(tablelements[6]).delay(4800).fadeTo(1200, 1);
                    $(tablelements[7]).delay(5600).fadeTo(1200, 1);
                    $(tablelements[8]).delay(6400).fadeTo(1200, 1);
                    $(tablelements[9]).delay(7200).fadeTo(1200, 1);
                    $(tablelements[10]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[11]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[12]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[13]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[14]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[15]).delay(8000).fadeTo(1200, 1);
                    $(tablelements[16]).delay(8000).fadeTo(1200, 1);
                }
                messageflag = 1;
            }
        });
    });

    originalblue = [];
    originalborders = [];
    $(document).ready(function(){
        $("body *").each(function () {
            var color = $(this).css("color");
            var border = $(this).css("border");
            if (color == "rgb(102, 217, 239)" && border.indexOf("solid") > -1) { // a bordered colored element
                originalblue.push($(this));
                originalborders.push([$(this),1]);
            }
            else if (color == "rgb(102, 217, 239)") { // not bordered element
                originalblue.push($(this));
                originalborders.push([$(this),0]);
            }
        });
    });

    jQuery(function($, undefined) {
        $('#term_demo').terminal(function(command, term) {
            if (command !== '') {
                try {
                    var result = window.eval(command);
                    if (result !== undefined) {
                        term.echo(new String(result));
                    }
                } catch(e) {
                    term.error(new String(e));
                }
            } else {
               term.echo('');
            }
        }, {
            greetings: 'Javascript Terminal - Credit to Mr. Jankiewicz at http://terminal.jcubic.pl',
            name: 'js_demo',
            height: 200,
            prompt: '[~/home.chrisfrew.in]$ '});
    });

    jQuery.fn.removeAttributes = function() {
      return this.each(function() {
        var attributes = $.map(this.attributes, function(item) {
          return item.name;
        });
        var img = $(this);
        $.each(attributes, function(i, item) {
        img.removeAttr(item);
        });
      });
    }

  }
  whatshappening() {
      document.getElementById("peterplayer").play();
      // Office space!
  }

  mrdorfman() {
      document.getElementById("mrdorfmanplayer").play();
      // Dean Wormer anyone?!?!?
  }

  hello() {
      document.getElementById("helloplayer").play();
      // Kent Dorfman anyone?!?!?
  }
  red() {
      $(".intro").css("background-image", "url(img/red.jpg)");
      $(".intro-text").css("color","white");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(249, 38, 114)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(249, 38, 114)"); // change that DOM object to monokai purple
          }
      }
  }

  orange() {
      $(".intro").css("background-image", "url(img/orange.jpg)");
      $(".intro-text").css("color","black");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(253, 151, 31)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(253, 151, 31)"); // change that DOM object to monokai purple
          }
      }
  }

  yellow() {
      $(".intro").css("background-image", "url(img/yellow.jpg)");
      $(".intro-text").css("color","white");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(255, 231, 146)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(255, 231, 146)"); // change that DOM object to monokai purple
          }
      }
  }

  green() {
      $(".intro").css("background-image", "url(img/green.jpg)");
      $(".intro-text").css("color","white");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(166, 226, 46)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(166, 226, 46)"); // change that DOM object to monokai purple
          }
      }
  }

  blue() {
      $(".intro").css("background-image", "url(img/blue.jpg)");
      $(".intro-text").css("color","black");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(102, 217, 239)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(102, 217, 239)"); // change that DOM object to monokai purple
          }
      }
  }

  purple() {
      $(".intro").css("background-image", "url(img/purple.jpg)");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(174, 129, 255)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(174, 129, 255)"); // change that DOM object to monokai purple
          }
      }
  }

  white() {
      $(".intro").css("background-image", "url(img/white.jpg)");
      $(".intro-text").css("color","black");
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).css("color", "rgb(256, 256, 256)"); // change that DOM object to monokai purple
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).css("border", "2px solid rgb(256, 256, 256)"); // change that DOM object to monokai purple
          }
      }
  }

  rainbows() {
      for (i = 0; i < originalblue.length; i++) {
          $(originalblue[i]).addClass("sweeper4"); // change that DOM object to have a "newtextillate" class
          if (originalborders[i][1] == 1) { // has border as well for this element
              $(originalborders[i][0]).addClass("sweeper4"); // change that DOM object to monokai purple
          }
      }
      sweeper4 = document.querySelectorAll('.sweeper4');
      window.setTimeout(loop4(), 500);
  }

  loop4() {
      for (i = 0; i < sweeper4.length; i++) {
          sweep(sweeper4[i], 'color', '#66D9EF', '#66D9EE', {direction: 1, duration: 5000});
      }
  }
  showmethebugs() {
      // default fruit fly bug:
      new BugController({});

      // default spiders:
      new SpiderController({});
  }

  turnoffthebugs() {

      function turnoffhelper() {
          $(".bug").removeAttributes();
      }

      window.setTimeout(turnoffhelper,500);
      window.setTimeout(turnoffhelper,1000);
      window.setTimeout(turnoffhelper,1500);
      window.setTimeout(turnoffhelper,2000);
      window.setTimeout(turnoffhelper,2500);
  }
  breaksite() {

      $("body *").each(function () {
          if ( $(this).not('#brokentext') || $(this).not('#term_demo') ) { // hide everything but the terminal
              $(this).hide();
          }
      });

      $("#brokentext").html("Oh my god, you actually typed it! I told you breaksite() was bad news! What's wrong with you?!?!? Can't you just listen for once? Try using fixsite() to redeem yourself...");
      $('.brokenanimation').textillate();

  }
  fixsite() {
      $("body *").each(function () {
          if ( $(this).is(".nav") || $(this).is("typewriter") || $(this).is("p") || $(this).is("#mywork") || $(this).is("#contact") || $(this).is(".intro") || $(this).is("#ghost") || $(this).is("#hobbies")) { // hide everything but the terminal
              $(this).show();
          }
      });
      window.scrollTo(0, 3000);
      $("#brokentext").html("Welp, you managed to fix it... look at you, a Javascript master...");
      $("#brokentext").removeClass("brokenanimation");
      $("#brokentext").addClass("fixedanimation");
      $('.fixedanimation').textillate();

  }
  spin() {
          $("#rotateonlythis").addClass("spinner");
          window.setTimeout(resetspin,2100);
          function resetspin() {
              $("#rotateonlythis").removeClass("spinner");
          }
  }
  doabarrelroll() {
      $("#rotateonlythis").addClass("barrelroll");
      document.getElementById("barrelplayer").play();
      window.setTimeout(resetbarrelroll,2100);
      function resetbarrelroll() {
          $("#rotateonlythis").removeClass("barrelroll");
      }
  }
  gocrazy() {
      $("#rotateonlythis").addClass("gocrazy");
      window.setTimeout(resetgocrazy,2100);
      function resetgocrazy() {
          $("#rotateonlythis").removeClass("gocrazy");
      }
  }
  tilt() {
      $("body").addClass("tilt");
      document.getElementById("creakplayer").play();
  }
  untilt() {
      if ($("body").hasClass("tilt")) {
          $("body").addClass("untilt");  // add the untilt for css
          $("body").removeClass("tilt"); // keep it clean; remove old class
          document.getElementById("creakplayer").play(); // creak it back
      }
      else {
          return "untilt() says: you gotta tilt() first!";
      }
  }
  invertsite() {
      $("body").addClass("invertsite");
      document.getElementById("swooshplayer").play();
  }
  render () {
    <div>
    {/* top left fixed banner */}
    <div id="ghost"><pi title="Hosted via Raspberry Pi + Apache2" style={{position:fixed, left:'5px', top:'100px', zIndex:99999999999, border:none}} target="_blank"><img src={pinewnew} width="140"/></pi></div>

    {/* Navigation */}
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                    {/* Hidden li included to remove active class from about link when scrolled up past about section */}
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="#about">About Me</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="#mywork">Projects</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="#hobbies">Hobbies</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="#contact">Contact</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" style={{color:'#66D9EF', cursor:'default'}}>|</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="https://art.chrisfrew.in">Art</a>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" href="https://photo.chrisfrew.in">Photos</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle tlt">Pages</a>
                        <ul className="dropdown-menu">
                            <li><a href="https://chrisfrew.in/angulartest.php">Angular.js</a></li>
                            <li><a href="https://music.chrisfrew.in">MySQL Login</a></li>
                            <li><a href="https://messages.chrisfrew.in">Messaging Site (Only two people can get online right now)</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" style={{color:'#66D9EF', cursor:'default'}}>|</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle tlt" data-in-effect="fadeInLeftBig">MUSIC</a>
                        <ul className="dropdown-menu">
                            <li><a id="solo">Solo - The Story So Far</a></li>
                            <li><a id="go">Go Long Dad - Four Year Strong</a></li>
                            <li><a id="freeze">Super Meat Freeze - Mord Fustang</a></li>
                            <li><a id="ninur">Ninur - Savant</a></li>
                            <li className="divider"></li>
                            <li><a id="off"><div className="monokaired">MUSIC OFF</div></a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" style={{color:'#66D9EF', cursor:'default'}}>|</a>
                    </li>
                    <li className="dropdown">
                        <a id="sweeper3" href="#" data-toggle="dropdown" className="dropdown-toggle tlt">Theme</a>
                        <ul className="dropdown-menu">
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#F92672', backgroundColor:'#F92672'}} onclick="red()">Palace</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#FD971F', backgroundColor:'#FD971F'}} onclick="orange()">New York Fall</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#FFE792', backgroundColor:'#FFE792'}} onclick="yellow()">Lake Twilight</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#A6E22E', backgroundColor:'#A6E22E'}} onclick="green()">Sierra Nevada</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#66D9EE', backgroundColor:'#66D9EE'}} onclick="blue()">Austrian Winter (Default)</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#AE81FF', backgroundColor:'#AE81FF'}} onclick="purple()">Sunset Down</a></li>
                            <li><a className="btn btn-default btn-xs" style={{color:'#000', borderColor:'#FFF', backgroundColor:'#FFF'}} onclick="towhite()">Boats in Evening</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="page-scroll tlt" data-in-effect="fadeInLeftBig" style={{color:'#66D9EF', cursor:'default'}}>|</a>
                    </li>
                    <li>
                        <a href="https://de.home.chrisfrew.in" style={{color:'#66D9EF'}}><img src={at} width="15px"/>/<img src={de} width="15px"/></a>
                    </li>
                </ul>
            </div>
            {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
    </nav>

    {/* Intro Header */}
    <header className="intro" id="myintro">
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-offset-2">
                        <img className="dropandspin hiddenfade" src={chrisround} width="250px"/>
                        <br/>
                        <br/>
                        <h2special className="intro-text hiddenfade" style={{color:'white'}}>Hello.<br/>My name is <div className="monokaiblue"><a className="page-scroll" href="#about">Chris Frewin.</a></div>{/* <br/>I go to <div className="cornellred">C<img src={cornell} width="45px">rnell.</div>*/}<br/>Inquire within...</h2special><br/>
                        <a href="#about" className="btn btn-circle page-scroll hiddenfade" style={{margin:'-100px'}}>
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="gradientblack"></div> {/* gradient to black at bottom of div */}
            <div className="blackbox"></div> {/* gradient to black at bottom of div */}
        </div>
    </header>

    {/* About Section */}
    <section id="about" className="container content-section text-center">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
                <div id="ghost">
                    <p className="credentialsmessage" style={{marginTop:'7cm'}}></p>
                        <table style={{width:'100%'}} className="bigfont">
                            <tr className="animatedtable">
                                <td><i className="step icon-perl size-60" style={{color: gray, fontSize:'2em'}}></i><br/><div className="monokaired">Perl</div> <br/> (1 year <div className="monokaired">daily</div> use)</td>
                                <td><i><img src={matlab} width="40px"/></i><br/><div className="monokaiblue">MATLAB</div> <br/> (5 years <div className="monokaiorange">frequent</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i className="step icon-python size-60" style={{color:darkblue,fontSize:'2em'}}></i><br/><div className="monokaiblue">Python</div><br/>(2 years<div className="monokaired"> daily </div>use)</td>
                                <td><i className="step icon-html size-60" style={{color:gray,fontSize:'2em'}}></i><br/><div className="monokaipurple">HTML</div> <br/>(3 years <div className="monokaiorange">frequent</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i className="step icon-shell size-60" style={{color:white,fontSize:'2em'}}></i><br/><div className="monokaiyellow">Bash &amp; Unix Tools</div> <br/> (1 year <div className="monokaired">daily</div> use)</td>
                                <td><i className="step icon-css size-60" style={{color:orange,fontSize:'2em'}}></i><br/><div className="monokaired">CSS</div> <br/> (3 years <div className="monokaiorange">frequent</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i><img src={fortran} width="40px"/></i><br/><div className="monokaigreen">Fortran</div> <br/> (1 year <div className="monokaipurple">moderate</div> use)</td>
                                <td><i className="step icon-javascript size-60" style={{color:gold,fontSize:'2em'}}></i><br/><div className="monokaiyellow">JavaScript</div> <br/> (4 months <div className="monokaiorange">frequent</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i><img src={latex} width="40px"/></i><br/><div className="monokaiorange">LaTeX</div> <br/> (2 years <div className="monokaired">daily</div> use)</td>
                                <td><i className="step icon-mysql size-60" style={{color:lightseagreen,fontSize:'2em'}}></i><br/><div className="monokaiblue">MySQL</div> <br/> (6 months <div className="monokaipurple">moderate</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i className="step icon-php size-60" style={{color:steelblue,fontSize:'2em'}}></i><br/><div className="monokaigreen">PHP</div> <br/> (6 months <div className="monokaipurple">moderate</div> use)</td>
                                <td><i><img src={git} width="40px"/></i><br/><div className="monokaiblue">Git</div> <br/> (2 years <div className="monokaiorange">frequent</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable">
                                <td><i className="step icon-aws size-60" style={{color:yellow, fontSize:'2em'}}></i><br/><div className="monokaiyellow">Amazon Web Services</div> <br/> (6 months <div className="monokaipurple">moderate</div> use)</td>
                                <td><i className="step icon-nodejs size-60" style={{color:yellowgreen, fontSize:'2em'}}></i><br/><div className="monokaiorange">Node.js</div> <br/> (1 year <div className="monokaired">daily</div> use)</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="animatedtable" align="center">
                                <td><i className="step icon-hadoop size-60" style={{color:turquoise,fontSize:'2em'}}></i><br/><div className="monokaired">Hadoop/MapReduce</div></td>
                            </tr>
                        </table>
                        <br/>
                        <br/>
                        <br/>
                        <div className="animatedtable">
                            <img src={chrisround} width="250px"/>
                            <br/>
                            <br/>
                            <p>That's me - Clarkson University's graduation, May 2014.
                            <br/>
                            As you can probably tell by now,
                            <br/>
                            <b id="sweeper2">I &hearts; coding and software development.</b></p>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="animatedtable">
                            <p>World traveler by day...</p>
                        </div>
                        <div className="animatedtable">
                            <img src={whatsnext} width="650px"/>
                        </div>
                        <div className="animatedtable">
                            <br/>
                            <br/>
                            <p>...Insomniac coder by night 😎</p>
                        </div>
                        <div className="animatedtable">
                            <img src={coder} width="250px"/>
                        </div>
                        <div className="animatedtable">
                            <br/>
                            <br/>
                            <p>If you haven't already, click below to see more!</p>
                        </div>
                        <br/><br/><br/><br/>
                        <p><a onClick="showBottom()" className="hidecontinuemessage">Click to see more</a></p>
                </div>
            </div>
        </div>
    </section>

    <div id="hidebottom">

        {/* Work & Projects Section */}
        <section id="mywork" className="content-section text-center">
            <div className="download-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="lightblue"><h2 className="tltwork">Projects</h2></div>
                        <p>The following are links to a few of my projects:</p>
                        <br/>
                        <a href="./img/tr{develop_}jpg" target="_blank" id="test" className="btn btn-default btn-lg">Numerical<br/>Tracers</a>
                        <br/>
                        <br/>
                        <p>My M.S. thesis. We treat <highlight>molecules as graphs</highlight> (atoms as nodes and bonds as edges) and apply a hierarchical pattern matching algorithm to determine the symmetries of structures of the molecules in each reaction, ultimately determining the <highlight>mass amounts of each location in each molecule</highlight> at every timestep of combustion. (<highlight>***Note:</highlight> the repo itself is private; the link brings up a screenshot of the repo as a show and tell.)</p>
                        <br/>
                        <br/>
                        <a href="https://www.sirenapparel.us" target="_blank" id="test" className="btn btn-default btn-lg">Siren<br/>Apparel</a>
                        <br/>
                        <br/>
                        <p>A <highlight>charity</highlight> clothing company that <highlight>donates all profits</highlight> to fire and police departments.</p>
                        <br/>
                        <br/>
                        <a href="https://www.sparkcleanenergy.org/jucce.html" target="_blank" id="victim3" className="btn btn-default btn-lg">JUCC-E Career<br/>Accelerator</a>
                        <br/>
                        <br/>
                        <p><highlight>JUCC-E</highlight> - <highlight>JU</highlight>mp Start Your <highlight>C</highlight>areer in <highlight>C</highlight>lean <highlight>E</highlight>nergy. Its a career accelerator I am currently operating that <highlight>matches</highlight> students passionate about energy and climate change to startups and other organizations in the <highlight>clean energy</highlight> space looking for interns with various skills.</p>
                        <br/>
                        <br/>
                        <a href="https://getonyourhorse.com" target="_blank" className="btn btn-default btn-lg">Stock-O-Matic<br/>(Website)</a>
                        <br/>
                        <br/>
                        <a href="https://github.com/benpetroski/stock-o-matic" target="_blank" className="btn btn-default btn-lg">Stock-O-Matic<br/>(Github Repo)</a>
                        <br/>
                        <br/>
                        <p>A machine learning project to attempt to predict which stocks will perform the best day to day. Mostly Python and MongoDB</p>
                        <br/>
                        <br/>
                        <a href="https://chrisfrew.in/projects/upursuit/index.html" target="_blank" className="btn btn-default btn-lg">UPursuit Event Organizer<br/>Site Build</a>
                        <br/>
                        <br/>
                        <p>An event organizer that leverages both the <a href="https://developer.forecast.io/docs" target="_blank">Dark Sky Forecast</a> and <a href="https://developers.google.com/maps/documentation/geocoding/intro" target="_blank">Google Geocoding</a> APIs with real-time table sorting thanks to <a href="https://www.listjs.com/" target="_blank">List.js</a>. The distance from each event to the user's location is also calculated.</p>
                        <br/>
                        <br/>
                        <p>I've also done some <highlight>backend database work</highlight> employing both webscraping and formatting data retrieved from two popular housing APIs - Zilyo (for airbnb) and the Expedia Affiliate Network (for hotels).</p>
                        <br/>
                        <p>I use these languages to accomplish a variety of tasks, including <highlight>productivity tools</highlight> with bash, <highlight>web development</highlight>, and <highlight>full-on software integration</highlight> using the I/O and regex power of Perl.</p>
                    <div className="lightblue"><h2 className="tltwork">Projects</h2></div>
                    <p>While most of the site I've coded by hand using Jquery/Javascript, here's a bunch of stuff I can take absolutely no credit for, but I thought was some really quite neat:</p>
                    <p>A light jar using a JavaScript canvas:</p>
                    <canvas id="canvas1" width="250px" height="250px"></canvas>
                    <p><i>...Can you see the light?</i></p>
                    <br/>
                    <br/>
                    <div id="rotateonlythis">
                        <p>Some functions I've already built in for your enjoyment to test the terminal:</p>
                        <div className="typewriter">
                            // Some color changing functions:<br/>
                            <div className="monokaigreen">green()</div> // Makes the site green themed<br/>
                            <div style={{color:'#66D9EEm', fontWeight:bold, display:inline}}>blue()</div> // Makes the site blue themed<br/>
                            <div className="monokaired">red()</div> // Makes the site blue themed<br/>
                            // Check the background image at the top for these!<br/>
                            <br/>
                            // Other fun &amp; interesting ones:<br/>
                            <div className="monokaiyellow">showmethebugs()</div> // Warning: not what you might think it is!<br/>
                            <div className="monokaiyellow">turnoffthebugs()</div> // Removes effects of above<br/>
                            <br/>
                            <div className="monokaiyellow">mrdorfman()</div> // Will be a laugh for anyone who has seen the movie Animal House<br/>
                            <div className="monokaiyellow">hello()</div> // Will ALSO be a laugh for anyone who has seen the movie Animal House<br/>
                            <div className="monokaired">whatshappening()</div> // Office space... another classic<br/>
                            <div className="monokaiyellow">rainbows()</div> // Try this one for yourself!<br/>
                            <br/>
                            <div className="monokaiyellow">spin()</div> // Go ahead, see what happens <br/>
                            <div className="monokaiyellow">doabarrelroll()</div> // Starfox anyone? <br/>
                            <div className="monokaiyellow">tilt()</div> // Akin to google's "tilt" easteregg <br/>
                            <div className="monokaiyellow">untilt()</div> // To undo the previous, some people think its "creepy"... <br/>
                            <div className="monokaiyellow">invertsite()</div> // Speaks for itself<br/>
                            <br/>
                            <div className="monokaiyellow">breaksite()</div> // Do NOT use this function!!! I warned you...<br/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div id="brokentext" className="brokenanimation"></div>
                    <br/>
                    <br/>
                    <div id="term_demo"></div>
                    <br/>
                    </div>
                </div>
            </div>
        </section>

        {/* Other Cool Stuff Section */}
        <section id="hobbies" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="lightblue"><h2 className="tltcool">Hobbies</h2></div>
                    <p>Here's some other stuff that I do:</p>

                    <a href="https://photo.chrisfrew.in" className="btn btn-default btn-lg">Photography</a>
                    <br/>
                    <br/>
                    <p>Some of my photography.</p>
                    <br/>

                    <a href="https://art.chrisfrew.in" className="btn btn-default btn-lg">Digital and Hand<br/>Made Artwork</a>
                    <br/>
                    <br/>
                    <p>Some of my artwork.<br/>Digital, pencil, ink, and graffiti pieces.</p>
                    <br/>

                    <a href="https://cook.chrisfrew.in" className="btn btn-default btn-lg">Cooking</a>
                    <br/>
                    <br/>
                    <p>Some of my (better) food creations.</p>
                    <br/>

                    <div className="specialheading">HIKER</div>
                    <img src={fortyer} width="75px"/>
                    <p>I'm an official Adirondack 46er, #7694</p>

                    <br/>
                    <div className="specialheading">TRAVELER</div>
                    <br/>
                    <table className="center">
                        <tr>
                            <th><p><highlight>Stateside <br/>&amp; Canada:</highlight></p></th>
                            <th>&emsp;&emsp;</th>
                            <td><p>New York City, Boston, Detriot,<br/>San Franscisco, Pittsburgh, Cleveland, Miami,<br/>Burlington, Portland ME, Montreal</p></td>
                        </tr>
                        <tr>
                            <th valign="top"><p><highlight>Europe:</highlight></p></th>
                            <th>&emsp;&emsp;</th>
                            <td><p>London, Berlin, Munich, Prague,<br/>Paris, Innsbruck, Vienna,<br/>Budapest, Salzburg, Zurich, Stuttgart, Weimar, Vilnius, Kaunas, Warsaw, Krakau</p></td>
                        </tr>
                        <tr>
                            <th><p><highlight>Asia:</highlight></p></th>
                            <th>&emsp;&emsp;</th>
                            <td><p>Beijing</p></td>
                        </tr>
                    </table>
                    <br/>
                    <br/>

                    <div className="specialheading">RUNNER<br/><div className="smallfont">(3 x 13.1) + (1 x 26.2)</div></div>
                    <img src={torontomarathon} width="125px"/>
                    <p>I've run a few half marathons and a marathon.<br/><highlight>Next race:</highlight> the 2015 Toronto Half Marathon.</p>
                    <br/>
                    <br/>

                    <div className="specialheading">WRITER<br/></div>
                    <p>Chippin away at a <a href="docs/LivingEarth.pdf" target="_blank">manuscript!</a></p>
                    <br/>
                    <br/>

                    <div className="specialheading">LANGUAGES<br/></div>
                    <table className="center">
                    <tr>
                        <td><p><highlight>German:</highlight></p></td>
                        <th>&emsp;&emsp;</th>
                        <td><p>Drei Jahre.</p></td>
                    </tr>
                    <tr>
                        <td><p><highlight>Spanish:</highlight></p></td>
                        <th>&emsp;&emsp;</th>
                        <td><p>¡Cinco años!</p></td>
                    </tr>
                    </table>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="lightblue"><h2 className="tltcontact">Contact</h2></div>
                    <p>Email: <a href="mailto:cjf94@cornell.edu">cjf94@cornell.edu</a></p>
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://www.linkedin.com/in/frewinchristopher/en" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-linkedin-square fa-fw"></i> <span className="network-name">LinkedIn</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/frewinchristopher" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://bitbucket.org/guitarshreder07" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-bitbucket fa-fw"></i> <span className="network-name">Bitbucket</span></a>
                        </li>
                        <li>
                            <a href="./docs/ChrisFrewinCV.pdf" className="btn btn-default btn-lg" target="_blank"><i className="fa fa-file fa-fw"></i> <span className="network-name">CV</span></a>
                        </li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p><i>"...The world you desire can be won. It exists... it is real... it is possible... it's yours."</i><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<tiny>-A.R., 1957</tiny></p>
                    <p><i>"...I have promises to keep, and miles to go before I sleep..."</i><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<tiny>-R.F., 1922</tiny></p>
                    <p><i>"Doing what's never been done before is intellectually seductive, whether or not we deem it practical."</i><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<tiny>-N.T., 2012</tiny></p>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer>
            <div className="container text-center">
                <p><supertiny>This page visited <span id="numvisits" className="monokaiblue"></span> times as of 09.09.2015 | Many thanks to open-source tools <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://letteringjs.com/" target="_blank">Lettering.js</a>, <a href="https://jschr.github.io/textillate/" target="_blank">Textillate.js</a>, and <a href="https://rileyjshaw.com/sweep/" target="_blank">Sweep.js</a>
                <br/>
                Powered by Raspbian &amp; Perl | Hosted on a Rasperry Pi | Chris Frewin &copy; 2015</supertiny></p>
            </div>
        </footer>
      </div>
        <audio id="peterplayer" controls>
            <source src={peter} type="audio/mp4"/>
        </audio>
        <audio id="mrdorfmanplayer" controls>
            <source src={mrdorfman} type="audio/mp4"/>
        </audio>
        <audio id="helloplayer" controls>
            <source src={hello} type="audio/mp3"/>
        </audio>
        <audio id="creakplayer" controls>
            <source src={creak} type="audio/mp3"/>
        </audio>
        <audio id="swooshplayer" controls>
            <source src={swoosh} type="audio/mp3"/>
        </audio>
        <audio id="barrelplayer" controls>
            <source src={barrelroll} type="audio/mp4"/>
        </audio>
        <audio id="soloplayer" controls>
            <source src={solo} type="audio/mpeg"/>
        </audio>
        <audio id="goplayer" controls>
            <source src={go} type="audio/mpeg"/>
        </audio>
        <audio id="freezeplayer" controls>
            <source src={freeze} type="audio/mpeg"/>
        </audio>
        <audio id="ninurplayer" controls>
            <source src={ninur} type="audio/mpeg"/>
        </audio>
        <style>
            audio {{visibility: hidden}}
        </style>
    </div>
  }
}

export default Fun;
