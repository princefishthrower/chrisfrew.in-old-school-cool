<?php
    $username = "websitedaemon";
    $password = "Wiskeyy7";
    $hostname = "localhost"; 
    $dbname = "websitelist";

    //connection to the database
    $dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");
    mysql_select_db($dbname) or die("Cannot select database");

    $result = mysql_query("SELECT * FROM firstlist");

    if($result === FALSE) { 
        die(mysql_error()); 
    }   
    // build a string to echo to the website
    $items = "[";
    while ($row = mysql_fetch_assoc($result)) {
        foreach($row as $cname => $cvalue){
            $items .= "'$cvalue', ";
        }
    }
    $items = rtrim($items, ', ');
    $items .= "]";

    mysql_free_result($result);
?>

<!DOCTYPE html>
<html ng-app lang="en">

    <head>

        </script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="The best website you'll ever find. ">
        <meta name="author" content="Chris Frewin, of course!">

        <title>✨angular.chrisfrew.in✨</title>

        <!-- Favicon -->
        <link rel="shortcut icon" href="img/favblue.ico"> <!--favicon (little block image that represents the site)-->

        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="css/grayscale.css" rel="stylesheet">

        <!-- animate.css (for textillate) -->
        <link href="css/animate.css" rel="stylesheet">

        <!-- Custom Fonts -->
        <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

        <!-- angular.js -->
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js"></script>

        <script type="text/javascript">
        function addtoDB() {
            // adding vars in parallel to both the mysql and JavaScript array
            var entryval = document.getElementById("entry").value;
            $.post("addtoDB.php",
            {
                entry: entryval
            });              
        };
        </script>

        <!-- item controller script -->
        <script type="text/javascript">
            function ItemsController($scope){
                $scope.name="Anonymous";
                var evalstring = "<?php echo $items; ?>"; // have php print all its contents from the mysql request
                $scope.items=eval(evalstring);
                $scope.addItem=function(){
                    $scope.items.push($scope.newItem);
                    $scope.searchAll = null;
                }
            }
        </script>

    </head>

    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        
        <!-- Navigation -->
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                        <li class="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li class="dropdown">
                            <a id="sweeper3" href="#" data-toggle="dropdown" class="dropdown-toggle tlt">MUSIC?</a>
                            <ul class="dropdown-menu">
                                <li><a id="solo">Solo - The Story So Far</a></li>
                                <li><a id="go">Go Long Dad - Four Year Strong</a></li>
                                <li><a id="freeze">Super Meat Freeze - Mord Fustang</a></li>
                                <li><a id="ninur">Ninur - Savant</a></li>
                                <li class="divider"></li>
                                <li><a id="off"><div class="monokaired">MUSIC OFF</div></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>

        <!-- Intro Header -->
        <header class="introwhite">
            <div class="intro-body">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-md-offset-1">
                            <h2>angular.js basic example</h2>
                            <div class="col-sm-10 col-md-offset-1">  
                                <p>A simple angular.js example (as well as using angular, I also have all values added to the list updated to a MYSQL table which is loaded every time you come back! Go on, refresh the page. Think of it like a giant, boring, graffiti wall.:</p>  
                                <br>
                                <form ng-submit="addItem()"> <!--for typing enter-->
                                    <div ng-controller="ItemsController">
                                        <p>List of items:</p>
                                        <b ng-repeat="item in items"><p>{{item}}</p></b>
                                        <br>

                                        <p>Add more items to the list (enter of click 'Add'):</p>
                                        <input type="text" ng-model="newItem" id="entry" style="color:black">
                                        <br>
                                        <br>
                                        <button ng-click="addItem()" class="btn btn-white" onclick="addtoDB()">Add</button><!--for clicking add button-->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- About Section -->
        <section id="about" class="container content-section text-center">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">

                    
                

                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="container text-center">
                <p><supertiny>Many thanks to open-source tools <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="http://letteringjs.com/" target="_blank">Lettering.js</a>, and <a href="http://jschr.github.io/textillate/" target="_blank">Textillate.js</a>. | &copy; Chris Frewin 2015.</supertiny></p>
            </div>
        </footer>

        <!-- jQuery -->
        <script src="js/jquery.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>

        <!-- Plugin JavaScript -->
        <script src="js/jquery.easing.min.js"></script>

        <!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

        <!-- Custom Theme JavaScript -->
        <script src="js/grayscale.js"></script>

        <!-- Lettering -->
        <script src="js/lettering.js"></script> <!-- lettering. -->

        <!-- textillate (text animation) -->
        <script src="js/jquery.textillate.js"></script>

        <!-- browser sniffer script -->
        <script>
            function runme() {
                return  navigator ? navigator.userAgent.toLowerCase() : "other";
            }
            browser = runme();
            if (browser.indexOf(".net") > -1) {
                window.alert("Dude........... Seriously?!\nInternet Explorer is NO good.\nGet Chrome.");
                window.open("http://lmgtfy.com/?q=download+google+chrome&l=1", name = "_self", fullscreen="yes");
            }
        </script>

        <!-- textillate script -->
        <script>
            $(function () {
                $('.tlt').textillate();
            })
        </script>

        <!-- sweep (text sweep color) -->
        <script src="js/sweep.min.js"></script>
        
        <!-- Script for color sweep !-->
        <script>
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
        </script>

        <!-- for lightjar -->
        <script src="js/modernizr-2.0.6.js"></script>
        
        <!-- for lighjar -->
        <script src="js/lightjar.js"></script>

        <!-- for google analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');  

            ga('create', 'UA-63301492-1', 'auto');
            ga('send', 'pageview');
        </script>

        <!-- Music Player -->
        <!-- Some Good ol' Story So Far -->
        <audio id="soloplayer" controls>
            <source src="mp3/solo.mp3" type="audio/mpeg">
        </audio>
        <!-- Go Long Dad - a classic! -->
        <audio id="goplayer" controls>
            <source src="mp3/go.mp3" type="audio/mpeg">
        </audio>
        <!-- Super Meat Freeze - ooooo, trendy! -->
        <audio id="freezeplayer" controls>
            <source src="mp3/freeze.mp3" type="audio/mpeg">
        </audio>
        <!-- Ninur - dat electronica -->
        <audio id="ninurplayer" controls>
            <source src="mp3/ninur.mp3" type="audio/mpeg">
        </audio>
        <!-- Hide the audio player -->
        <style>
            audio {visibility: hidden}
        </style>
        <!--++++++++++++++++++++++++++++++++++++++++++++++++++-->
        
        <!-- Music Player Script-->
        <script>
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
        </script>

    </body>
</html>
