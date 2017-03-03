<?php
    error_reporting(E_ALL);
    //$entry = $_GET['entry'];

    $username = "websitedaemon";
    $password = "Wiskeyy7";
    $hostname = "localhost"; 
    $dbname = "websitelist";

    // Create connection
    $conn = new mysqli($hostname, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $entry = trim($_POST["entry"]);

    $sql = "INSERT INTO firstlist (item) VALUES ('".$entry."')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>