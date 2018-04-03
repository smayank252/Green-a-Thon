$(document).ready(function(){
	$.get("./cred/cred.txt", function(data){
        //var  mnx=data;
        $.ajax({
   			//var  ws=("http://rtuproject.co.nf/data_user_history.php" + mnx);	               
            url: "http://rtuproject.co.nf/data_user_history.php" + data,
            method: "GET",
			success: function(data) {
				console.log(data);
				var dt = [];
				var t = [];
                var ah = [];
                var sm = [];
                var r = [];
				for(var i in data) {
					dt.push("Date-Time " + data[i].Date_Time);
					t.push(data[i].Temperature);
                    ah.push(data[i].Air_Humidity);
                    sm.push(data[i].Soil_Moisture);
                    r.push(data[i].Rain);
				}
				var chartdata1 = {
					labels: dt,
					datasets : [
						{
							label: 'Temperature',
							backgroundColor: 'rgba(100, 100, 255, 0.75)',
							borderColor: 'rgba(0, 0, 0, 0.75)',
							hoverBackgroundColor: 'rgba(100, 100, 255, 1)',
							hoverBorderColor: 'rgba(100, 100, 255, 1)',
							data: t
						}
					]
				};
				var ctx1 = $("#mycanvas-1");
				var barGraph = new Chart(ctx1, {
					type: 'bar',
					data: chartdata1
				});
                var chartdata2 = {
					labels: dt,
					datasets : [
						{
							label: 'Air Humidity',
							backgroundColor: 'rgba(100, 100, 255, 0.75)',
							borderColor: 'rgba(0, 0, 0, 0.75)',
							hoverBackgroundColor: 'rgba(100, 100, 255, 1)',
							hoverBorderColor: 'rgba(100, 100, 255, 1)',
							data: ah
						}
					]
				};
				var ctx2 = $("#mycanvas-2");
				var barGraph = new Chart(ctx2, {
					type: 'bar',
					data: chartdata2
				});
				var chartdata3 = {
					labels: dt,
					datasets : [
						{
							label: 'Soil Moisture',
							backgroundColor: 'rgba(100, 100, 255, 0.75)',
							borderColor: 'rgba(0, 0, 0, 0.75)',
							hoverBackgroundColor: 'rgba(100, 100, 255, 1)',
							hoverBorderColor: 'rgba(100, 100, 255, 1)',
							data: sm
						}
					]
				};
				var ctx3 = $("#mycanvas-3");
				var barGraph = new Chart(ctx3, {
					type: 'bar',
					data: chartdata3
				});
				var chartdata4 = {
					labels: dt,
					datasets : [
						{
							label: 'Rain',
							backgroundColor: 'rgba(100, 100, 255, 0.75)',
							borderColor: 'rgba(0, 0, 0, 0.75)',
							hoverBackgroundColor: 'rgba(100, 100, 255, 1)',
							hoverBorderColor: 'rgba(100, 100, 255, 1)',
							data: r
						}
					]
				};
				var ctx4 = $("#mycanvas-4");
				var barGraph = new Chart(ctx4, {
					type: 'bar',
					data: chartdata4
				});
			},
			error: function(data) {
				console.log(data);
			}
		});
    });  
});