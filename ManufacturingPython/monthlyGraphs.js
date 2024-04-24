var totalProductionPerDay = {
    labels: ['Month 1', 'Month 2'],
    datasets: [{
        label: 'Total Production per Month',
        data: [91.033, 92.2], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
            'rgba(73, 120, 95, 0.2)', 
            'rgba(180, 218, 167, 0.2)', 
            'rgba(245, 244, 195, 0.2)', 
            'rgba(194, 85, 46, 0.2)' 
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', 
            'rgba(73, 120, 95, 1)', 
            'rgba(180, 218, 167, 1)', 
            'rgba(245, 244, 195, 1)',
            'rgba(194, 85, 46, 1)' 
        ],
        borderWidth: 1
    }]
};

var totalOccupancyPerDay = {
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3', 'Workstation 4', 'Workstation 5', 'Workstation 6'],
    datasets: [{
        label: 'Average Occupancy per Workstation',
        data: [47.25, 47.25 , 47.25, 47.25, 47.25, 47.25], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
            'rgba(73, 120, 95, 0.2)', 
            'rgba(180, 218, 167, 0.2)', 
            'rgba(245, 244, 195, 0.2)', 
            'rgba(194, 85, 46, 0.2)' 
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', 
            'rgba(73, 120, 95, 1)', 
            'rgba(180, 218, 167, 1)', 
            'rgba(245, 244, 195, 1)', 
            'rgba(194, 85, 46, 1)' 
        ],
        borderWidth: 1
    }]
};

var totalAvgProdTimePerDay = {
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3', 'Workstation 4', 'Workstation 5', 'Workstation 6'],
    datasets: [
        {
            label: 'Month 1',
            data: [47.25, 47.25, 47.25, 47.25, 47.25, 47.25],
            backgroundColor: "rgba(180, 218, 167, 0.5)"
        },
        {
            label: 'Month 2',
            data: [47.08, 47.08, 47.08, 47.08, 47.08, 47.08],
            backgroundColor: "rgba(194, 85, 46, 0.5)"
        }
    ]
};

var totalProdRejPerDay = {
    labels: ["Month 1", "Month 2"],
    datasets: [
        {
            label: "Total Products",
            data: [91.033, 92.2],
            backgroundColor: "rgba(180, 218, 167, 0.5)"
        },
        {
            label: "Rejected Products",
            data: [5.1, 4.63],
            backgroundColor: "rgba(194, 85, 46, 0.5)"
        }
    ]
};

var totalAvgDelayPerDay = {
    labels: ['Month 1', 'Month 2'],
    datasets: [{
        label: 'Average Delay Time per Month',
        data: [293.66, 282.51], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
            'rgba(73, 120, 95, 0.2)', 
            'rgba(180, 218, 167, 0.2)', 
            'rgba(245, 244, 195, 0.2)', 
            'rgba(194, 85, 46, 0.2)' 
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', 
            'rgba(73, 120, 95, 1)', 
            'rgba(180, 218, 167, 1)', 
            'rgba(245, 244, 195, 1)', 
            'rgba(194, 85, 46, 1)' 
        ],
        borderWidth: 1
    }]
};

var totalAccRatePerDay = {
    labels: ['Month 1', 'Month 2'],
    datasets: [{
        label: 'Total Accident Rate per Work Station',
        data: [0.0, 0.00001], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
            'rgba(73, 120, 95, 0.2)', 
            'rgba(180, 218, 167, 0.2)', 
            'rgba(245, 244, 195, 0.2)', 
            'rgba(194, 85, 46, 0.2)' 
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', 
            'rgba(73, 120, 95, 1)', 
            'rgba(180, 218, 167, 1)', 
            'rgba(245, 244, 195, 1)', 
            'rgba(194, 85, 46, 1)' 
        ],
        borderWidth: 1
    }]
};

var opcionestotalProductionPerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var opcionestotalOccupancyPerDay = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Distribución de colores'
        }
    }
};

var opcionestotalAvgProdTimePerDay = {
    scales: {
        x: {
            stacked: true,
          },
        y: {
            stacked: true
          }
    }
};

var opcionestotalProdRejPerDay = {
    scales: {
        x: {
            stacked: true,
          },
        y: {
            stacked: true
          }
    }
    
};

var opcionestotalAvgDelayPerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var opcionestotalAccRatePerDay = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var contextototalProductionPerDay = document.getElementById('totalProductionPerDay').getContext('2d');

var grafico = new Chart(contextototalProductionPerDay, {
    type: 'bar',
    data: totalProductionPerDay,
    options: opcionestotalProductionPerDay
});

var contextototalOccupancyPerDay = document.getElementById('totalOccupancyPerDay').getContext('2d');

var pieOccupancy = new Chart(contextototalOccupancyPerDay, {
    type: 'pie',
    data: totalOccupancyPerDay,
    options: opcionestotalOccupancyPerDay
});

var contextototalAvgProdTimePerDay = document.getElementById('totalAvgProdTimePerDay').getContext('2d');

var pieAvgProdTime = new Chart(contextototalAvgProdTimePerDay, {
    type: 'bar',
    data: totalAvgProdTimePerDay,
    options: opcionestotalAvgProdTimePerDay
});

var contextototalProdRejPerDay = document.getElementById('totalProdRejPerDay').getContext('2d');

var pieProdRej = new Chart(contextototalProdRejPerDay, {
    type: 'bar',
    data: totalProdRejPerDay,
    options: opcionestotalProdRejPerDay
});

var contextototalAvgDelayPerDay = document.getElementById('totalAvgDelayPerDay').getContext('2d');

var pieAvgDelay = new Chart(contextototalAvgDelayPerDay, {
    type: 'line',
    data: totalAvgDelayPerDay,
    options: opcionestotalAvgDelayPerDay
});

var contextototalAccRatePerDay = document.getElementById('totalAccRatePerDay').getContext('2d');

var pieAccRate = new Chart(contextototalAccRatePerDay, {
    type: 'doughnut',
    data: totalAccRatePerDay,
    options: opcionestotalAccRatePerDay
});
