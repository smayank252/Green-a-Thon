$(document).ready(function(){
	$.get("./loc/loc.txt", function(data){
        //var  mnx=data;
        $.ajax({
            //var  ws=("http://rtuproject.co.nf/data_government_status.php" + mnx);	               
            url: "http://rtuproject.co.nf/data_government_status.php" + data,
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
				var chartdata5 = {
				labels: t,
				datasets : [
					{
                                                label: 'Air Humidity',
                                                fill: false,
                                                lineTension: 0.1,
                                                backgroundColor: 'rgba(60, 250, 75, 0.75)',
						borderColor: 'rgba(60, 250, 75, 1)',
						pointHoverBackgroundColor: 'rgba(60, 250, 75, 1)',
						pointHoverBorderColor: 'rgba(60, 250, 75, 1)',
                                                data: ah
					},
                                        {
					        label: 'Soil Moisture',
                                                fill: false,
                                                lineTension: 0.1,
                                                backgroundColor: 'rgba(29, 202, 255, 0.75)',
                                                borderColor: 'rgba(29, 202, 255, 1)',
						pointHoverBackgroundColor: 'rgba(29, 202, 255, 1)',
						pointHoverBorderColor: 'rgba(29, 202, 255, 1)',
						data: sm
					},
                                        {
                                                label: 'Rain',
                                                fill: false,
                                                lineTension: 0.1,
                                                backgroundColor: 'rgba(211, 72, 54, 0.75)',
						borderColor: 'rgba(211, 72, 54, 1)',
						pointHoverBackgroundColor: 'rgba(211, 72, 54, 1)',
						pointHoverBorderColor: 'rgba(211, 72, 54, 1)',
						data: r
                                                }
					]
					};
                                        var ctx5 = $("#mycanvas5");
                                        var LineGraph = new Chart(ctx5, {
                                                type: 'line',
                                                data: chartdata5
					});
                                        var chartdata6 = {
                                                labels: ah,
                                                datasets : [
						{
                                                        label: 'Temperature',
                                                        fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(59, 89, 152, 0.75)',
							borderColor: 'rgba(59, 89, 152, 1)',
							pointHoverBackgroundColor: 'rgba(59, 89, 152, 1)',
							pointHoverBorderColor: 'rgba(59, 89, 152, 1)',
							data: t
						},
                                                {
                                                        label: 'Soil Moisture',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(29, 202, 255, 0.75)',
							borderColor: 'rgba(29, 202, 255, 1)',
							pointHoverBackgroundColor: 'rgba(29, 202, 255, 1)',
							pointHoverBorderColor: 'rgba(29, 202, 255, 1)',
							data: sm
						},
                                                {
                                                        label: 'Rain',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(211, 72, 54, 0.75)',
							borderColor: 'rgba(211, 72, 54, 1)',
							pointHoverBackgroundColor: 'rgba(211, 72, 54, 1)',
							pointHoverBorderColor: 'rgba(211, 72, 54, 1)',
							data: r
						}
					]
					};
                                        var ctx6 = $("#mycanvas6");
                                                var LineGraph = new Chart(ctx6, {
                                                type: 'line',
                                                data: chartdata6
					});	
                                        var chartdata7 = {
					labels: sm,
					datasets : [
						{
                                                        label: 'Temperature',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(59, 89, 152, 0.75)',
							borderColor: 'rgba(59, 89, 152, 1)',
							pointHoverBackgroundColor: 'rgba(59, 89, 152, 1)',
							pointHoverBorderColor: 'rgba(59, 89, 152, 1)',
							data: t
						},
                                                {
                                                        label: 'Air Humidity',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(60, 250, 75, 0.75)',
							borderColor: 'rgba(60, 250, 75, 1)',
							pointHoverBackgroundColor: 'rgba(60, 250, 75, 1)',
							pointHoverBorderColor: 'rgba(60, 250, 75, 1)',
							data: ah
						},
                                                {
                                                        label: 'Rain',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(211, 72, 54, 0.75)',
							borderColor: 'rgba(211, 72, 54, 1)',
							pointHoverBackgroundColor: 'rgba(211, 72, 54, 1)',
							pointHoverBorderColor: 'rgba(211, 72, 54, 1)',
							data: r
						}
					]
					};
                                        var ctx7 = $("#mycanvas7");
                                                var LineGraph = new Chart(ctx7, {
                                                type: 'line',
                                                data: chartdata7
					});
                                        var chartdata8 = {
					labels: r,
					datasets : [
						{
                                                        label: 'Temperature',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(59, 89, 152, 0.75)',
							borderColor: 'rgba(59, 89, 152, 1)',
							pointHoverBackgroundColor: 'rgba(59, 89, 152, 1)',
							pointHoverBorderColor: 'rgba(59, 89, 152, 1)',
							data: t
						},
                                                {
                                                        label: 'Air Humidity',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(60, 250, 75, 0.75)',
							borderColor: 'rgba(60, 250, 75, 1)',
							pointHoverBackgroundColor: 'rgba(60, 250, 75, 1)',
							pointHoverBorderColor: 'rgba(60, 250, 75, 1)',
							data: ah
						},
                                                {
                                                        label: 'Soil Moisture',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(29, 202, 255, 0.75)',
							borderColor: 'rgba(29, 202, 255, 1)',
							pointHoverBackgroundColor: 'rgba(29, 202, 255, 1)',
							pointHoverBorderColor: 'rgba(29, 202, 255, 1)',
							data: sm
						}
					]
					};
                                        var ctx8 = $("#mycanvas8");
                                                var LineGraph = new Chart(ctx8, {
                                                type: 'line',
                                                data: chartdata8
					});
                                        var chartdata9 = {
					labels: dt,
					datasets : [
						{
                                                        label: 'Temperature',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(59, 89, 152, 0.75)',
							borderColor: 'rgba(59, 89, 152, 1)',
							pointHoverBackgroundColor: 'rgba(59, 89, 152, 1)',
							pointHoverBorderColor: 'rgba(59, 89, 152, 1)',
							data: t
						},
                                                {
                                                        label: 'Air Humidity',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(60, 250, 75, 0.75)',
							borderColor: 'rgba(60, 250, 75, 1)',
							pointHoverBackgroundColor: 'rgba(60, 250, 75, 1)',
							pointHoverBorderColor: 'rgba(60, 250, 75, 1)',
							data: ah
						},
                                                {
                                                        label: 'Soil Moisture',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(29, 202, 255, 0.75)',
							borderColor: 'rgba(29, 202, 255, 1)',
							pointHoverBackgroundColor: 'rgba(29, 202, 255, 1)',
							pointHoverBorderColor: 'rgba(29, 202, 255, 1)',
							data: sm
						},
                                                {
                                                        label: 'Rain',
							fill: false,
                                                        lineTension: 0.1,
                                                        backgroundColor: 'rgba(211, 72, 54, 0.75)',
							borderColor: 'rgba(211, 72, 54, 1)',
							pointHoverBackgroundColor: 'rgba(211, 72, 54, 1)',
							pointHoverBorderColor: 'rgba(211, 72, 54, 1)',
							data: r
						}

					]
					};
                                        var ctx9 = $("#mycanvas9");
                                                var LineGraph = new Chart(ctx9, {
                                                type: 'line',
                                                data: chartdata9
					});
                                },
                                error: function(data) {
                                        console.log(data);
                                }
                        });
                });
        });  