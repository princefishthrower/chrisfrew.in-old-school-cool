<?php

// read all data from json file and simply return json file
$filename = "stockAlerts.json";
$content = file_get_contents($filename);
echo $content;

?>