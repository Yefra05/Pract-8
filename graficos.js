var barData = {
    labels: ["México", "Brasil", "República Dominicana", "Argentina",  "Colombia"],
    datasets: [
      {
        label: "Millones de turista",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#00BFFF", "#FFD700", "#800000", "#FF69B4", "#1E90FF"],
        data: [38.33, 3.63, 6.7, 3.89, 4.40]
      }
    ]
  };
  
  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: barData,
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: 'Porcentaje del turismo en Latino America'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  var pieData = [
    {
      label: "México",
      value: 38.33,
      color: "#3e95cd"
    },
    {
      label: "Brasil",
      value: 3.63,
      color: "#8e5ea2"
    },
    {
      label: "República Dominicana",
      value: 6.7,
      color: "#3cba9f"
    },
    {
      label: "Argentina",
      value: 4.40,
      color: "#e8c3b9"
    },
   
    {
      label: "Colombia",
      value: 7.1,
      color: "#00BFFF"
    },
   
  ];
  
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: pieData.map(function(item){ return item.label }),
      datasets: [{
        data: pieData.map(function(item){ return item.value }),
        backgroundColor: pieData.map(function(item){ return item.color })
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Porcentaje del turismo en Latino America'
      }
    }
  });
  