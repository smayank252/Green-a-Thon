<!DOCTYPE html>
<html>
	<head>
		<title>User History</title>
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
        
        <?php
        $mobile_num = $_GET["mn"];
        $device_id = $_GET["di"];
        $file_name_1 = "cred.txt";
        //$file_name_2 = "device_id.txt";
        $location_1 = "cred/".$file_name_1;
        //$location_2 = "cred/".$file_name_2;
        $text_1 = "?di=".$device_id."&mn=".$mobile_num;
        //$text_2 = $device_id;
        $my_file_1 = fopen($location_1, "w") or die("Unable to open file!");
        //$my_file_2 = fopen($location_2, "w") or die("Unable to open file!");
        fwrite($my_file_1, $text_1);
        //fwrite($my_file_2, $text_2);
        //echo "cred updated";
        fclose($my_file_1);
        //fclose($my_file_2);
        ?>
                
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
        <hr>
                
		<!-- javascript -->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/Chart.min.js"></script>
		<script type="text/javascript" src="js/user_history.js"></script>
	</body>
</html>