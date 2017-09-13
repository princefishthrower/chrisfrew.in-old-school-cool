#!/usr/bin/perl

use Web::Query qw();

# automatically prints webite, using (essentially a cgi script to print out a webpage every night at midnight)

open P, ">index.html" or die "Cannot open output file: $!";


# print header of html file
print P "<html lang=\"en\"><head>

    <meta charset=\"utf-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <meta name=\"description\" content=\"\">
    <meta name=\"author\" content=\"\">

    <title>UPursuit Event Organizer</title>

    <link rel=\"icon\" href=\"img/favicon.ico\" type=\"image/x-icon\">
    <link rel=\"shortcut icon\" href=\"img/favicon.ico\" type=\"image/x-icon\">

    <!-- Bootstrap Core CSS -->
    <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">

    <!-- Custom CSS -->
    <link href=\"css/business-casual.css\" rel=\"stylesheet\">

    <!-- live preview CSS -->
    <link href=\"css/livepreview-demo.css\" rel=\"stylesheet\" type=\"text/css\">


    <!-- Fonts -->
    <link href=\"http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"http://fonts.googleapis.com/css?family=Josefin+Slab:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic\" rel=\"stylesheet\" type=\"text/css\">

    <script style=\"\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js\"></script>
    <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\"></script>

    <script src=\"http://maps.gstatic.com/maps-api-v3/api/js/21/7/common.js\" charset=\"UTF-8\" type=\"text/javascript\"></script><script src=\"http://maps.gstatic.com/maps-api-v3/api/js/21/7/util.js\" charset=\"UTF-8\" type=\"text/javascript\"></script><script src=\"http://maps.gstatic.com/maps-api-v3/api/js/21/7/geocoder.js\" charset=\"UTF-8\" type=\"text/javascript\"></script><script src=\"http://maps.gstatic.com/maps-api-v3/api/js/21/7/stats.js\" charset=\"UTF-8\" type=\"text/javascript\"></script></head>

    <body>

    <div class=\"brand\">UPursuit Event Organizer</div>
    <div class=\"address-bar\">Cornell University | Ithaca NY </div>


    <div class=\"container\">

        <div class=\"row\">
            <div class=\"box\">
                <div class=\"col-lg-12\">
                    <hr>
                    <h2 class=\"intro-text text-center\"><strong>Cornell Alumni Events</strong></h2>
                    <hr>
                    <div id=\"eventslist\" style=\"overflow:auto;\">\n\n";

# some code to get table source (generated portion of page)
print "Python scraper is now running... this takes about five minutes...\n";
system("python scraper.py"); # run python awesome webscraper

open FILE, "<file.txt";
@lines = <FILE>;

open SC, "<sourcecode.html";
@sourcecode = <SC>;
#print "@sourcecode\n";

$lines = "@sourcecode";
#print "lines: ".$lines."\n";

my $w = Web::Query->new_from_html($lines);
my $eventslist = $w->find('#eventslist')->as_html; #everythin in our eventslist id in the source
print P $eventslist;

print P "					</div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container -->

    <footer>
        <div class=\"container\">
            <div class=\"row\">
                <div class=\"col-lg-12 text-center\">
                    <p>UPursuit &copy; 2015 | This site uses the <a href=\"https://developer.forecast.io/docs\" target=\"_blank\">Dark Sky Forecast</a> and <a href=\"https://developers.google.com/maps/documentation/geocoding/intro\" target=\"_blank\">Google Geocoding</a> APIs</p>
                </div>
            </div>
        </div>
    </footer>    

    <script src=\"js/jquery.js\"></script>
    <script src=\"js/bootstrap.min.js\"></script>

    <!-- List.js -->
    <script src=\"js/list.js\"></script>

    <!-- script for geolocation -->
    <script type=\"text/javascript\">

    window.onload = getLocation(); // going to try this right on page load...

    var town = \"\";
    var lat = \"\";
    var lng = \"\";

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log(\"Geolocation is not supported by this browser.\");

            // This section of the script is for the list.js - make one even if geolocation fails
            options = {
                valueNames: [ \'eventname\', \'hiddentime\', \'eventlocation\' ] // build the table down here to  register the hidden distance
            };
            
            userList = new List(\'eventslist\', options);

            document.getElementById(\"modifybutton\").disabled=false; // make the button clickable
            //document.getElementById(\"modifybutton\").innerHTML=\"<button class=\\\"sort\\\" data-sort=\\\"hiddendistance\\\">Sort by distance</button>\";
            document.getElementById(\"modifybutton\").innerHTML=\"Sort by distance</button>\";
        }
    }

    function showPosition(position) {
        lat = position.coords.latitude; 
        lng = position.coords.longitude; 
        console.log(lat);
        console.log(lng);
        window.setTimeout(getDistances,1000); // wait to get data, then calculate distances....
    }

    function getDistances() {
        locationarray = document.getElementsByClassName(\"hiddendistance\");

        console.log(locationarray);

        for (i = 0; i < locationarray.length; i++) { // for each distance element
            console.log(\"i is: \"+i+\" of \"+locationarray.length);
            var currentelement = locationarray[i]; // look at current element
            var currentlatlng = currentelement.innerHTML; // get its inner conteents
            var latlngarray = currentlatlng.split(\",\"); // split by the comma they are seperated by
            var currentlat = latlngarray[0]; 
            var currentlng = latlngarray[1]; 
            if (isNaN(currentlat)) {
                console.log(\"latitude was NaN, maxing out distance!\");
                var distance = 999999999;
            }
            else {
                var distance = getDistanceFromLatLonInMi(lat, lng, currentlat, currentlng); // get distance from users location to various events
            }

            currentelement.innerHTML = \"\"; //empty inside before putting stuff into it (removing lat and lng that we got)

            console.log(\"distance is: \"+distance);
            console.log(\"putting\"+distance+\"in innerHTML of hiddendistance\");
            currentelement.innerHTML = distance;

        }

        // This section of the script is for the list.js
        options = {
            valueNames: [ \'eventname\', \'hiddentime\', \'eventlocation\', \'hiddendistance\' ] // build the table down here to register the hidden distance, now that it has loaded
        };
        
        userList = new List(\'eventslist\', options);

        document.getElementById(\"modifybutton\").disabled=false; // make the button clickable
        //document.getElementById(\"modifybutton\").innerHTML=\"<button class=\\\"sort\\\" data-sort=\\\"hiddendistance\\\">Sort by distance</button>\";
        document.getElementById(\"modifybutton\").innerHTML=\"Sort by distance\";

    }

    function getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
      var R = 3963; // Radius of the earth in mi
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in mi
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    </script>
</body>\n";

$now = localtime;

print P "<!-- Site last updated at ".$now." -->\n";
print P "</html>\n";


