<?php
    error_reporting(E_ALL);

    // Create connection
    $link = mysql_connect("localhost", "logondaemon", "Wiskeyy7");

    // Select database
    mysql_select_db("secure_login", $link);

    // Generate query
    $email = rtrim($_GET["email"]);
    $passwordquery = rtrim($_GET["password"]);
    $query = "SELECT * FROM members WHERE email = '".$email."' AND password = '".$passwordquery."'";

    // Get number of rows
    $result = mysql_query($query, $link);
    $numrows = mysql_num_rows($result);

    if ($numrows == 0) {
        ?>
        <b>User not found, try again.</b>
        <br>
        <b>Email:</b>
        <br>
        <input type="text" id="email" style="color:black">
        <br>
        <br>
        <b>Password:</b>
        <br>
        <input type="password" id="password" style="color:black">
        <input type="submit" style="position: absolute; left: -9999px"/>
        <br>
        <br>
        <?php
    } else {
        // do other stuff...
        ?>
        <b>Successful login!<br>Here is the music we have registered with your username:<br><br></b>
        Solo:
        <br>
        <br>
        <audio id="soloplayer" controls>
            <source src="mp3/solo.mp3" type="audio/mpeg">
        </audio>
        <br>
        <br>
        Go Long Dad:<br>
        <!-- Go Long Dad - a classic! -->
        <audio id="goplayer" controls>
            <source src="mp3/go.mp3" type="audio/mpeg">
        </audio>
        <br>
        <br>
        Super Meat Freeze:<br>
        <!-- Super Meat Freeze - ooooo, trendy! -->
        <audio id="freezeplayer" controls>
            <source src="mp3/freeze.mp3" type="audio/mpeg">
        </audio>
        <br>
        <br>
        Ninur:<br>
        <!-- Ninur - dat electronica -->
        <audio id="ninurplayer" controls>
            <source src="mp3/ninur.mp3" type="audio/mpeg">
        </audio>
        <br>
        <br>

        <h1>(Songs will soon be printed using Perl script)</h1>
        <?php
    }

?>





