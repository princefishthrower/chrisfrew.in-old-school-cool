<?php
    error_reporting(E_ALL);

    // Create connection
    $link = mysql_connect("localhost", "messagedaemon", "Wiskeyy7");

    // Select database
    mysql_select_db("messagesdb", $link);

    // Generate query
    $email = rtrim($_GET["email"]);
    $passwordquery = rtrim($_GET["password"]);

    $query = "SELECT * FROM users WHERE email = '".$email."' AND password = '".$passwordquery."'";

    // Get number of rows
    $result = mysql_query($query, $link);
    $numrows = mysql_num_rows($result);

    if ($numrows == 0) {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
        ?>
        <b>Hello, <?php echo $ip ?><br>Coming at me live from <?php echo $details->city ?>, eh?<br>
        <b>Care to try your credentials again?</b>
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
        // build messages and users array from mysql database
        $query = mysql_query("SELECT message FROM messages"); // select all messages
        $messagesArray = array();
        while($res = mysql_fetch_array($query)) {
            $messagesArray[] = $res['message'];
        }

        $query = mysql_query("SELECT user FROM messages"); // select all messages
        $usersArray = array();
        while($res = mysql_fetch_array($query)) {
            $usersArray[] = $res['user'];
        }

        $query = mysql_query("SELECT time FROM messages"); // select all messages
        $timeArray = array();
        while($res = mysql_fetch_array($query)) {
            $timeArray[] = $res['time'];
        }

        if (strcmp($email, "frewin.christopher@gmail.com") == 0) {
            // I have logged in
            // My messages will appear on the left side, veronikas on the right
            $buildstr .= "<table align=\"center\">\n";
            $i = 0;
            foreach ($messagesArray as $message) {

                if (strcmp($usersArray[$i], 'chris') == 0) {
                    $buildstr .= "  <tr>\n";
                    $buildstr .= "      <th><i>chris (".$timeArray[$i]."):</i><br>$message</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "  </tr>\n";
                }
                else {
                    $buildstr .= "  <tr>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th><i>veronika (".$timeArray[$i]."):</i><br>$message</th>\n";
                    $buildstr .= "  </tr>\n";
                }
                $i++;
            }
            $buildstr .= "</table>\n";
            echo "<div id=\"messagesection\">";
            echo $buildstr;
            echo "</div>";
            echo "<br>";
            echo "<b>Type and press enter to send a message:</b>";
            echo "<br>";
            echo "<input type=\"text\" id=\"chrismessage\" style=\"color:black;width:300px;\">";
            echo "<br><br>";
            echo "<button type=\"button\" class=\"btn btn-default\" onclick=\"clearmessages()\">CLEAR MESSAGES</button>";
            echo "<br><br>";
        } 
        else {
            // Veronika has logged in: oppossite sided messaging
            // I have logged in
            // My messages will appear on the left side, veronikas on the right
            $buildstr .= "<table align=\"center\">\n";
            $i = 0;
            foreach ($messagesArray as $message) {

                if (strcmp($usersArray[$i], 'veronika') == 0) {
                    $buildstr .= "  <tr>\n";
                    $buildstr .= "      <th><i>veronika (".$timeArray[$i]."):</i><br>$message</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "  </tr>\n";
                }
                else {
                    $buildstr .= "  <tr>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>\n";
                    $buildstr .= "      <th><i>chris (".$timeArray[$i]."):</i><br>$message</th>\n";
                    $buildstr .= "  </tr>\n";
                }
                $i++;
            }
            $buildstr .= "</table>\n";
            echo "<div id=\"messagesection\">";
            echo $buildstr;
            echo "</div>";
            echo "<br>";
            echo "<b>Type and press enter to send a message:</b>";
            echo "<br>";
            echo "<input type=\"text\" id=\"vronimessage\" style=\"color:black;width:300px;\">";
            echo "<br><br>";
            echo "<button type=\"button\" class=\"btn btn-default\" onclick=\"clearmessages()\">CLEAR MESSAGES</button>";
            echo "<br><br>";
        }
    }
?>





