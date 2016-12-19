<?php
    error_reporting(E_ALL);
    //$entry = $_GET['entry'];

    $username = "messagedaemon";
    $password = "Wiskeyy7";
    $hostname = "localhost"; 
    $dbname = "messagesdb";

    // Create connection
    $conn = new mysqli($hostname, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $message = trim($_POST["message"]);
    $user = trim($_POST["user"]);
    $time = date('H:i:s'); // Hour:minute:second timestamp

    $sql = "INSERT INTO messages (message, user, time) VALUES ('".$message."', '".$user."', '".$time."')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>