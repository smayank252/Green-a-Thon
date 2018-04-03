<!DOCTYPE html>
<html>
	<head>
		<title>Government Status</title>
		<style type="text/css">
			#chart-container {
				width: 800px;
				height: auto;
			}
                        #chart-container{
                        width:100%;
                        text-center:center;
                        }
                        .canvas{
                        display:inline;
                        }
                        
		</style>
	</head>
	<body>
        <h3>View Statistics: Government</h3>
        <?php
        $location = $_GET["l"];
        //$device_id = $_GET["di"];
        $file_name_1 = "loc.txt";
        //$file_name_2 = "device_id.txt";
        $location_1 = "loc/".$file_name_1;
        //$location_2 = "cred/".$file_name_2;
        $text_1 = "?l=".$location;
        //$text_2 = $device_id;
        $my_file_1 = fopen($location_1, "w") or die("Unable to open file!");
        //$my_file_2 = fopen($location_2, "w") or die("Unable to open file!");
        fwrite($my_file_1, $text_1);
        //fwrite($my_file_2, $text_2);
        //echo "cred updated";
        fclose($my_file_1);
        //fclose($my_file_2);
        ?>
        <?php echo "<h4>Showing Stats as per Locations,Current data for location: ";echo $location;echo "</h4>";?>
        <br />
        <h5>Weather parameters Variation With Time</h5>
        
        <div id="chart-container">
                <canvas id="mycanvas-1"></canvas>
        </div>
        <hr>       
        <div id="chart-container">
		<canvas id="mycanvas-2"></canvas>
	</div>
        <hr>
        <div id="chart-container">
		<canvas id="mycanvas-3"></canvas>
	</div>
        <hr>
        <div id="chart-container">
		<canvas id="mycanvas-4"></canvas>
	</div>
        <hr>
        <h5>All Weather Parameter Variations with Date Time (Comaparison)</h5>
        <div id="chart-container">
		<canvas id="mycanvas9"></canvas>
	</div>
        <hr>
        
        <h5>Air Humidity, Soil Moisture And Rain Variation with Temperature</h5>
        <div id="chart-container">
                <canvas id="mycanvas5"></canvas>
	</div>
        <hr>       
        <h5>Temperature, Soil Moisture And Rain Variation with Air Humidity</h5>
        <div id="chart-container">
		<canvas id="mycanvas6"></canvas>
	</div>
        <hr>
        <h5>Temperature, Air Humidity And Rain Variation with Soil Moisture</h5>
        <div id="chart-container">
		<canvas id="mycanvas7"></canvas>
	</div>
        <hr>
        <h5>Temperature, Air Humidity And Soil Moisture Variation with Rain</h5>
        <div id="chart-container">
		<canvas id="mycanvas8"></canvas>
	</div>
        <hr>
        <hr>
        <hr>
    		<!-- javascript -->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/Chart.min.js"></script>
		<script type="text/javascript" src="js/government_status.js"></script>
	</body>
</html>