<?php
// process posted variables
$sChromosome = $_POST["sChromosome"];
$iStartIndex = $_POST["iStartIndex"];
$iEndIndex = $_POST["iEndIndex"];

// Pack the variables in an array
$params = array($sChromosome, $iStartIndex, $iEndIndex);

// Execute the python script with the JSON data
$result = shell_exec('python humanGenome.py ' . escapeshellarg(json_encode($params)));

// this 'result' will become the 'data' parameter of the ajax call
echo $result;

?>