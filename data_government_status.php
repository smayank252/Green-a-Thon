<?php
//setting header to json
header('Content-Type: application/json');

define('TIMEZONE', 'Asia/Kolkata');
date_default_timezone_set(TIMEZONE);
$date_time = date('Y-m-d H:i:s');

//database
$servername = "fdb17.biz.nf";
$username = "2416991_rtuproject";
$password = "adarsh4145";
$dbname = "2416991_rtuproject";
$location=$_GET["l"];
//$mobile_num=$_GET["mn"];
//get connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}

//query to get data from the table
//query = "SELECT (Date_Time, Temperature, Air_Humidity, Soil_Moisture, Rain ) FROM SAVE_DATA WHERE Device_ID = '".$device_id."' ORDER BY ASC";
$query = sprintf("SELECT Date_Time, Temperature, Air_Humidity, Soil_Moisture, Rain FROM SAVE_DATA WHERE Location = '".$location."' ORDER BY Date_Time ASC");

$result = $conn->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

$result->close();

//$mysqli->close();

print json_encode($data);

?>