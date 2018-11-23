new Chart(document.getElementById("financial-report-expenses"), {
    type: 'bar',
    data: {
      labels: ["2017-2018", "2018-2019", "2019-2020"],
      datasets: [
        {
          label: "ECC",
          backgroundColor: "#749CCD",
          data: [60000,40000,20000]
        }, {
          label: "Church Partners",
          backgroundColor: "#356093",
          data: [100000,100000,100000]
        }, {
          label: "Members",
          backgroundColor: "#1a3049",
          data: [50000,125000,200000]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Projected Budget'
      },
      scaleShowValues: true,
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true,
				callback: function(value, index, values) {
                        return '$' + value;
                    }
			}
		}],
		xAxes: [{
			ticks: {
				autoSkip: false
			}
		}]
	}   
    }
});