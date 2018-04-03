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
$mn=$_GET["mn"];
$di=$_GET["di"];
//$mobile_num=$_GET["mn"];
//get connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}

//query to get data from the table
//query = "SELECT (Temperature, Air_Humidity, Soil_Moisture, Rain ) FROM SAVE_DATA WHERE Device_ID = '".$device_id."' ORDER BY ASC";
$query = sprintf("SELECT Date_Time, Temperature, Air_Humidity, Soil_Moisture, Rain FROM SAVE_DATA WHERE Device_ID = '".$di."' AND Mobile_Num = '".$mn."' ORDER BY Date_Time DESC LIMIT 1");

$result = $conn->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

$result->close();

//$mysqli->close();

//echo $data->Date_Time;
$x = json_encode($data);
$someArray = json_decode($x, true);
//$y= json_decode($json);
//echo <p>;
//echo $data;
//echo $someArray->Date_Time;
//print_r($someArray); 
//echo $someArray[0]["name"];
//echo </p>;
$data_time= $someArray[0]["Date_Time"];
$temperature= $someArray[0]["Temperature"];
$air_humidity= $someArray[0]["Air_Humidity"];
$soil_moisture= $someArray[0]["Soil_Moisture"];
$rain= $someArray[0]["Rain"];


//$temperature, $air_Humidity, $soil_Moisture, $rain;

echo "Values taken at  : ";  
echo $data_time;
echo "\n";

echo "Temperature(C)   : ";  
echo $temperature;
echo "\n";

echo "Humidity(%)      : ";  
echo $air_humidity;
echo "\n";

echo "Soil Moisture(%) : ";  
echo $soil_moisture;
echo "\n";

echo "Rain(%)          : "; 
echo $rain;
echo "\n";
?>
