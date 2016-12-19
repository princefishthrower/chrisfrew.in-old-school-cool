<?php
	//get content of textfile
	$filename = "button_click.txt";
	$content = file($filename);

	//put content in array
	$array = explode("||", $content[0]);
	$clicks = $array[0];

	$clicks = $clicks + 1;

	//insert votes to txt file
	$clickstext = $clicks."||";
	$fp = fopen($filename,"w");
	fputs($fp,$clickstext);
	fclose($fp);
	echo($clicks);
?>
