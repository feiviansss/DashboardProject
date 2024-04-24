var totalProductionPerDay = {
    labels: ['Last Production Day on Record'],
    datasets: [{
        label: 'Total Production per Day',
        data: [93], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
        ],
        borderColor: [
            'rgba(53, 44, 36, 1)', 
        ],
        borderWidth: 1
    }]
};

var totalOccupancyPerDay = {
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3','Workstation 4' ,'Workstation 5', 'Workstation 6'],
    datasets: [{
        label: 'Total Occupancy per Day',
        data: [0.998, 0.998, 0.998, 0.998, 0.998, 0.998], 
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
    labels: ['Workstation 1', 'Workstation 2', 'Workstation 3','Workstation 4' ,'Workstation 5', 'Workstation 6'],
    datasets: [{
        label: 'Total Average Production Time per Work Station',
        data: [42.3125, 42.3125, 42.3125, 42.3125, 42.3125, 42.3125], 
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

var totalProdRejPerDay = {
    labels: ['Total Products', 'Rejected Products'],
    datasets: [{
        label: 'Total Production Rejection per Work Station',
        data: [93, 4], 
        backgroundColor: [
            'rgba(53, 44, 36, 0.2)', 
            'rgba(73, 120, 95, 0.2)', 
            'rgba(180, 218, 167, 0.2)', 
            'rgba(245, 244, 195, 0.2)', 
            'rgba(194, 85, 46, 0.2)' 
        ], borderColor: [
            'rgba(53, 44, 36, 1)', 
            'rgba(73, 120, 95, 1)', 
            'rgba(180, 218, 167, 1)', 
            'rgba(245, 244, 195, 1)', 
            'rgba(194, 85, 46, 1)' 
        ],
        borderWidth: 1
    }]
};

var totalAvgDelayPerDay = {
    labels: ['Last Production Day on Record'],
    datasets: [{
        label: 'Average Delay Time per Work Station',
        data: [253.87], 
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
    labels: ['Accident Rate'],
    datasets: [{
        label: 'Total Accident Rate per Work Station',
        data: [0.000001], 
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
        y: {
            beginAtZero: true
        }
    }
};

var opcionestotalProdRejPerDay = {
    scales: {
        y: {
            beginAtZero: true
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
    type: 'line',
    data: totalAvgProdTimePerDay,
    options: opcionestotalAvgProdTimePerDay
});

var contextototalProdRejPerDay = document.getElementById('totalProdRejPerDay').getContext('2d');

var pieProdRej = new Chart(contextototalProdRejPerDay, {
    type: 'doughnut',
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
    type: 'pie',
    data: totalAccRatePerDay,
    options: opcionestotalAccRatePerDay
});
