#!/usr/bin/perl

# automatically prints music webite based on what is in the BANNER usb

# open file
open P, ">login_test.php" or die "Cannot open output file: $!";

# print php header stuff
print P "<?php
    error_reporting(E_ALL);

    // Create connection
    \$link = mysql_connect(\"localhost\", \"logondaemon\", \"Wiskeyy7\");

    // Select database
    mysql_select_db(\"secure_login\", \$link);

    // Generate query
    \$email = rtrim(\$_GET[\"email\"]);
    \$passwordquery = rtrim(\$_GET[\"password\"]);
    \$query = \"SELECT * FROM members WHERE email = '\".\$email.\"' AND password = '\".\$passwordquery.\"'\";

    // Get number of rows
    \$result = mysql_query(\$query, \$link);
    \$numrows = mysql_num_rows(\$result);

    if (\$numrows == 0) {
        ?>
        <b>User not found, try again.</b>
        <br>
        <b>Email:</b>
        <br>
        <input type=\"text\" id=\"email\" style=\"color:black\">
        <br>
        <br>
        <b>Password:</b>
        <br>
        <input type=\"password\" id=\"password\" style=\"color:black\">
        <input type=\"submit\" style=\"position: absolute; left: -9999px\"/>
        <br>
        <br>
        <?php
    } else {
        // do other stuff...
        ?>
        <b>Successful login!<br>Here is the music we have registered with your username:<br><br></b>";

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
print P "<?php
    }

?>";