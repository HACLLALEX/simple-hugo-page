function chart(id,json){
	
	var id = id;
	var jsondata = [];
	
	//console.log(id);
	//console.log("json here: " + json);
	/*
	const data = [
		{ "project":"EMDS WEB 1 0 0" , "sourceRank":23 },
		{ "project":"ekg inter 1 1 0" , "sourceRank":17 },
		{ "project":"eHS IDEAS LITE 1 0 0" , "sourceRank":9},
		{ "project":"eHS IDEAS2 LITE 1 0 0" , "sourceRank":16 },
		{ "project":"eHR IDEAS2 1 0 11" , "sourceRank":16 },
		{ "project":"eHR IDEAS 1 31 0" , "sourceRank":9 },
		{ "project":"EDONOR 1 0 0" , "sourceRank":11 },
		{ "project":"EAO ITUNI IGW APP 1 2 1" , "sourceRank":19 },
		{ "project":"CIT MOBILE IOS 0 3 56" , "sourceRank":15 },
		{ "project":"ADS MOBILE APP PAGER 664" , "sourceRank":21},
		{ "project":"ADS ADSM BKSRV SLT 1 3 5" , "sourceRank":18}
	];

	const data2 =[
		{ "db":"mssql" , "value":23 },
		{ "db":"mongodb " , "value":17 },
		{ "db":"oracle" , "value":9}
	];
	
	const data3 =[
		{ "db":"mssql" , "value":23 },
		{ "db":"mongodb " , "value":17 },
		{ "db":"oracle" , "value":9}
	];*/
	 
	var output;	
	var genrateColor = function(){
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgb(" + r + "," + g + "," + b +" ,1)"; 	
	};
	
	var valueRank = [];
	var db = [];
	var color = [];
	
	 $.getJSON(json, function(result) {           
		if (result != null) {
			//console.log("Have Data ");
			//console.log(result);
			jsondata = result;
			output = jsondata.sort(function(x,y){
				return ((x.value < y.value)?1 :((x.value > y.value)?-1:0));
			});
			for(var i=0;i<output.length;i++){
				valueRank.push(output[i].value);
				db.push(output[i].db);
				color.push(genrateColor());
			}
			
			var canvas = document.getElementById(id);

			Chart.defaults.global.defaultFontFamily = "Lato";
			Chart.defaults.global.defaultFontSize = 18;
			
			var chartData = {
			  label: 'Database Library',
			  data: valueRank,
			  backgroundColor: color,
			  borderColor: 'rgb(255,255,255)',
			  //borderColor: 'rgb(0,0,0,0)',
			  borderWidth: 2,
			  hoverBorderWidth: 0
			};

			var chartOptions = {
			  responsive: true,
			  legend: {
				position: 'bottom'
			  },
			  plugins: {
				  datalabels: {
					color: '#fff',
					anchor: 'end',
					align: 'start',
					offset: -10,
					borderWidth: 2,
					borderColor: 'rgb(255,255,255)',
					borderRadius: 25,
					backgroundColor: (context) => {
					  return context.dataset.backgroundColor;
					},
					font: {
					  weight: 'bold',
					  size: '10'
					},
					formatter: (value) => {
					  return value ;
					}
				  }
			  }
			};
			
			var barChart = new Chart(canvas, {
			  type: 'pie',
			  data: {
				labels: db,
				datasets: [chartData],
			  },
			  options: chartOptions
			});

			//console.log(output);
		} else {
			//console.log("no data");
		}
	 });
	
	
	//test genrate color start
	/*
	var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    console.log("color rlt :" + c);*/
	//return (c);
	//test genrate color end
	
}