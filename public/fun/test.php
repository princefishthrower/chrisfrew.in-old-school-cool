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
	$items = "[";
	while ($row = mysql_fetch_assoc($result)) {
		foreach($row as $cname => $cvalue){
        	$items .= "'$cvalue', ";
    	}
	}
	$items = rtrim($items, ', ');
	$items .= "];";

	print $items;

	mysql_free_result($result);
?>