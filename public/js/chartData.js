function chart(id,json){
	var id = id;
	console.log(id);
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
	];

	var output = data.sort(function(x,y){
		return ((x.sourceRank < y.sourceRank)?1 :((x.sourceRank > y.sourceRank)?-1:0));
	});
	console.log(output);
	var sourceRank = [];
	var project = [];

	for(var i=0;i<output.length;i++){
		sourceRank.push(output[i].sourceRank);
		project.push(output[i].project);
	}

	var canvas = document.getElementById(id);

	Chart.defaults.global.defaultFontFamily = "Lato";
	Chart.defaults.global.defaultFontSize = 18;

	var chartData = {
	  label: 'Source Rank',
	  data: sourceRank,
	  backgroundColor: 'rgba(255,207,47,0.6)',
	  borderColor: 'rgba(255,207,47)',
	  borderWidth: 2,
	  hoverBorderWidth: 0
	};

	var chartOptions = {
	  scales: {
		yAxes: [{
		  categoryPercentage: 1.5,
		  barPercentage: 0.5,
		  gridLines: {
			display:false
		  }
		}],
		xAxes: [{
		  gridLines: {
			display:false
		  }
		}],
	  },
	  elements: {
		rectangle: {
		  borderSkipped: 'center',
		}
	  },
	  tooltips: {
		enabled: false
	  },
	  hover: {
		  animationDuration: 0
	  },
	  plugins: {
	    datalabels: {
			color: 'rgb(0,0,0)',
			anchor: 'end',
			align: 'start',
			offset: -25,
			font: {
			  weight: 'bold',
			  size: '15'
			},
			formatter: (value) => {
			  return value ;
			}
	    }
	  }
	  /*,
	  animation: {
		onComplete:function(){
			var chartInstance =this.chart,
				ctx = chartInstance.ctx;
				ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';
				
				this.data.datasets.forEach(function (dataset,i){
				  var meta = chartInstance.controller.getDatasetMeta(i);
				  meta.data.forEach(function(bar,index){
					  var data = dataset.data[index];
					  ctx.fillText(data, bar._model.x + 15, bar._model.y +10);
				  });
				});
		}
	  }*/
	};

	var barChart = new Chart(canvas, {
	  type: 'horizontalBar',
	  data: {
		labels: project,
		datasets: [chartData],
	  },
	  options: chartOptions
	});
}
window.onload = chart;