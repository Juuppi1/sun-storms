// Fetch and parse solar weather JSON data
function fetchAndParseData() {
    fetch('boulder_k_index_1m.json')
        .then(response => response.json())
        .then(data => {
            // Process the data by creation of chart
            createChart(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Create a line chart
function createChart(data) {
    const timestamps = data.map(entry => entry.time_tag);
    const kIndexes = data.map(entry => entry.k_index);

    // Find the canvas element made for the chart
    const ctx = document.getElementById('k-index_Chart').getContext('2d');

    // Create the chart itself
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'K-Index',
                data: kIndexes,
                borderColor: 'rgb(210, 211, 138)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        parser: 'YYYY-MM-DDTHH:mm:ss',
                        tooltipFormat: 'YYYY-MM-DD HH:mm:ss',
                        unit: 'minute'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'K-Index'
                    }
                }]
            }
        }
    });
}

// Do everything on page load
window.onload = function() {
    fetchAndParseData();
};