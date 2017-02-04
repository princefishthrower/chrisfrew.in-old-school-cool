<?php
// process posted variables
$sStock = $_POST["sStock"];
$sOption = $_POST["sOption"];
$sPrice = $_POST["sPrice"];
$sNote = $_POST["sNote"];

// Pack the variables in an array
$params = array($sStock, $sOption, $sPrice, $sNote);

// Execute the python script with the JSON data
$result = shell_exec('python setStockAlert.py ' . escapeshellarg(json_encode($params)));

// this 'result' will become the 'data' parameter of the ajax call
echo $result;

?>