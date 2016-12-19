#!/usr/bin/perl

# automatically prints music webite based on what is in the BANNER usb

# open file
open P, ">music_test.html" or die "Cannot open output file: $!";

# print php header stuff
print P "<!DOCTYPE html>
<html lang=\"en\">

    <head>

        <meta charset=\"utf-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <meta name=\"description\" content=\"The best website you'll ever find. \">
        <meta name=\"author\" content=\"Chris Frewin, of course!\">

        <title>✨music.chrisfrew.in✨</title>

        <!-- Favicon -->
        <link rel=\"shortcut icon\" href=\"img/favblue.ico\"> <!--favicon (little block image that represents the site)-->

        <!-- Bootstrap Core CSS -->
        <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">

        <!-- Custom CSS -->
        <link href=\"css/grayscale.css\" rel=\"stylesheet\">

        <!-- animate.css (for textillate) -->
        <link href=\"css/animate.css\" rel=\"stylesheet\">

        <!-- Custom Fonts -->
        <link href=\"font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">
        <link href=\"http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\">
        <link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">

        <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>

    </head>

                
        <!-- Intro Header -->
        <header class=\"intro\">
            <div class=\"intro-body\">
                <div class=\"container\">
                    <div class=\"row\">
                        <div class=\"col-sm-8 col-md-offset-2\">
                            <h1 id = \"sweeper1\" class=\"brand-heading tlt\" data-in-effect=\"bounceInDown\" data-in-shuffle=\"true\">MYSQL/Perl Music Loader</h1>
                            <div class=\"whitetext\">
                                <div id=\"messagetext\">";

# loop through all files in /media/Banner/music
#$dirname = '/home/chris/Music';

$dirname = '/media/Banner/music';
opendir(DIR, $dirname) or die "Could not open $dirname\n";
while ($filename = readdir(DIR)) {
    print P "$filename:
            <br>
            <br>
            <audio id=\"music\" controls>
                <source src=\"$dirname/$filename\" type=\"audio/mpeg\">
            </audio>
            <br>
            <br>";
}

# print php footer stuff
print P "                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- About Section -->
        <section id=\"about\" class=\"container content-section text-center\">
            <div class=\"row\">
                <div class=\"col-lg-8 col-lg-offset-2\">
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class=\"container text-center\">
                <p><supertiny><i>\"...The world you desire can be won. It exists... it is real... it is possible... it's yours.”</i><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<tiny>-A.R., 1957</supertiny></p>
                <p><supertiny><i>\"...I have promises to keep, and miles to go before I sleep...\"</i><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<tiny>-R.F., 1922</tiny><supertiny></p>
                    
                <p><supertiny>Many thanks to open-source tools <a href=\"http://getbootstrap.com/\" target=\"_blank\">Bootstrap</a>, <a href=\"http://letteringjs.com/\" target=\"_blank\">Lettering.js</a>, <a href=\"http://jschr.github.io/textillate/\" target=\"_blank\">Textillate.js</a>, and <a href=\"http://rileyjshaw.com/sweep/\" target=\"_blank\">Sweep.js</a>. | Powered by Raspbian &amp; Perl. | Hosted on a Rasperry Pi. | &copy; Chris Frewin 2015.</supertiny></p>
            </div>
        </footer>

        <!-- jQuery -->

        <script src=\"js/jquery.js\"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src=\"js/bootstrap.min.js\"></script>

        <!-- Plugin JavaScript -->
        <script src=\"js/jquery.easing.min.js\"></script>

        <!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
        <script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false\"></script>

        <!-- Custom Theme JavaScript -->
        <script src=\"js/grayscale.js\"></script>

        <!-- Lettering -->
        <script src=\"js/lettering.js\"></script> <!-- lettering. -->

        <!-- textillate (text animation) -->
        <script src=\"js/jquery.textillate.js\"></script>

        <!-- browser sniffer script -->
        <script>
            function runme() {
                return  navigator ? navigator.userAgent.toLowerCase() : \"other\";
            }
            browser = runme();
            if (browser.indexOf(\".net\") > -1) {
                window.alert(\"Dude........... Seriously?!\nInternet Explorer is NO good.\nGet Chrome.\");
                window.open(\"http://lmgtfy.com/?q=download+google+chrome&l=1\", name = \"_self\", fullscreen=\"yes\");
            }
        </script>

        <!-- textillate script -->
        <script>
            $(function () {
                $('.tlt').textillate();
            })
        </script>

        <!-- sweep (text sweep color) -->
        <script src=\"js/sweep.min.js\"></script>
        
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
        <script src=\"js/modernizr-2.0.6.js\"></script>
        
        <!-- for lighjar -->
        <script src=\"js/lightjar.js\"></script>

        <!-- for google analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');  

            ga('create', 'UA-63301492-1', 'auto');
            ga('send', 'pageview');
        </script>
        
    
    </body>
</html>";