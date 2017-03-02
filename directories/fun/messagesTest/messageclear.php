<?php
    error_reporting(E_ALL);
    //$entry = $_GET['entry'];

    $username = "messagedaemon";
    $password = "Wiskeyy7";
    $hostname = "localhost"; 
    $dbname = "messagesdb";

    // Create connection
    $link = mysql_connect("localhost", "messagedaemon", "Wiskeyy7");

    // Select database
    mysql_select_db("messagesdb", $link);

    // Generate query
    $email = rtrim($_POST["email"]);
    $passwordquery = rtrim($_POST["password"]);

    $query = "SELECT * FROM users WHERE email = '".$email."' AND password = '".$passwordquery."'";

    // Get number of rows
    $result = mysql_query($query, $link);
    $numrows = mysql_num_rows($result);

    if ($numrows == 0) {
        ?>
        <b>You do not have permission to do that.</b>
        <br>
        <b>Please try logging in again:.</b>
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
    }
    else {
        // Create connection
        $conn = new mysqli($hostname, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql = "TRUNCATE TABLE messages";

        if ($conn->query($sql) === TRUE) {
            echo "Query completed successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }
?>