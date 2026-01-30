// ===================================
// URBANAIR INSIGHT - JAVASCRIPT
// Interactive Dashboard Logic
// ===================================

// City Data
const cityData = {
    delhi: {
        name: "Delhi, India",
        aqi: 385,
        category: "hazardous",
        temp: "30°C",
        humidity: "45%",
        wind: "12 km/h",
        pm25: 112,
        pollutants: {
            pm25: { value: 112, unit: "μg/m³", percent: 75 },
            pm10: { value: 186, unit: "μg/m³", percent: 70 },
            o3: { value: 45, unit: "ppb", percent: 65 },
            no2: { value: 38, unit: "ppb", percent: 55 },
            so2: { value: 10, unit: "ppb", percent: 25 },
            co: { value: 5, unit: "ppm", percent: 45 }
        },
        healthAdvice: "Health warnings of emergency conditions. The entire population is more likely to be affected by serious health effects. Everyone should avoid all outdoor exertion.",
        trend: [320, 340, 360, 375, 390, 385, 380, 390, 395, 385, 380, 390, 385, 390, 395, 385, 380, 390, 385, 390, 385, 380, 385, 390, 385, 380, 385, 390, 385, 385]
    },
    mumbai: {
        name: "Mumbai, India",
        aqi: 288,
        category: "very-unhealthy",
        temp: "32°C",
        humidity: "68%",
        wind: "18 km/h",
        pm25: 95,
        pollutants: {
            pm25: { value: 95, unit: "μg/m³", percent: 68 },
            pm10: { value: 142, unit: "μg/m³", percent: 65 },
            o3: { value: 38, unit: "ppb", percent: 55 },
            no2: { value: 32, unit: "ppb", percent: 48 },
            so2: { value: 8, unit: "ppb", percent: 22 },
            co: { value: 4, unit: "ppm", percent: 38 }
        },
        healthAdvice: "Health alert: everyone may experience more serious health effects. Active children and adults, and people with respiratory disease should avoid prolonged outdoor exertion.",
        trend: [245, 255, 260, 268, 275, 280, 285, 288, 290, 285, 280, 285, 288, 290, 285, 280, 285, 288, 285, 288, 290, 285, 280, 285, 288, 285, 288, 290, 288, 288]
    },
    bangalore: {
        name: "Bengaluru, India",
        aqi: 205,
        category: "unhealthy",
        temp: "28°C",
        humidity: "52%",
        wind: "15 km/h",
        pm25: 72,
        pollutants: {
            pm25: { value: 72, unit: "μg/m³", percent: 58 },
            pm10: { value: 118, unit: "μg/m³", percent: 55 },
            o3: { value: 32, unit: "ppb", percent: 48 },
            no2: { value: 28, unit: "ppb", percent: 42 },
            so2: { value: 6, unit: "ppb", percent: 18 },
            co: { value: 3, unit: "ppm", percent: 32 }
        },
        healthAdvice: "Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects. Avoid prolonged outdoor activities.",
        trend: [180, 185, 190, 195, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205, 210, 205, 200, 205]
    },
    kolkata: {
        name: "Kolkata, India",
        aqi: 210,
        category: "unhealthy",
        temp: "31°C",
        humidity: "65%",
        wind: "10 km/h",
        pm25: 78,
        pollutants: {
            pm25: { value: 78, unit: "μg/m³", percent: 60 },
            pm10: { value: 125, unit: "μg/m³", percent: 58 },
            o3: { value: 35, unit: "ppb", percent: 50 },
            no2: { value: 30, unit: "ppb", percent: 45 },
            so2: { value: 7, unit: "ppb", percent: 20 },
            co: { value: 3.5, unit: "ppm", percent: 35 }
        },
        healthAdvice: "Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects.",
        trend: [195, 200, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210, 205, 210, 215, 210]
    },
    chennai: {
        name: "Chennai, India",
        aqi: 143,
        category: "usg",
        temp: "33°C",
        humidity: "72%",
        wind: "22 km/h",
        pm25: 55,
        pollutants: {
            pm25: { value: 55, unit: "μg/m³", percent: 45 },
            pm10: { value: 88, unit: "μg/m³", percent: 42 },
            o3: { value: 28, unit: "ppb", percent: 38 },
            no2: { value: 22, unit: "ppb", percent: 32 },
            so2: { value: 5, unit: "ppb", percent: 15 },
            co: { value: 2, unit: "ppm", percent: 22 }
        },
        healthAdvice: "Unhealthy for sensitive groups. Active children and adults, and people with respiratory disease should limit prolonged outdoor exertion.",
        trend: [130, 135, 138, 142, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143, 140, 143, 145, 143]
    },
    hyderabad: {
        name: "Hyderabad, India",
        aqi: 178,
        category: "unhealthy",
        temp: "29°C",
        humidity: "55%",
        wind: "14 km/h",
        pm25: 65,
        pollutants: {
            pm25: { value: 65, unit: "μg/m³", percent: 52 },
            pm10: { value: 105, unit: "μg/m³", percent: 50 },
            o3: { value: 30, unit: "ppb", percent: 42 },
            no2: { value: 26, unit: "ppb", percent: 38 },
            so2: { value: 6, unit: "ppb", percent: 17 },
            co: { value: 2.8, unit: "ppm", percent: 28 }
        },
        healthAdvice: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
        trend: [165, 170, 172, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 180, 178, 175, 178, 178]
    },
    pune: {
        name: "Pune, India",
        aqi: 165,
        category: "unhealthy",
        temp: "27°C",
        humidity: "48%",
        wind: "16 km/h",
        pm25: 62,
        pollutants: {
            pm25: { value: 62, unit: "μg/m³", percent: 50 },
            pm10: { value: 98, unit: "μg/m³", percent: 48 },
            o3: { value: 29, unit: "ppb", percent: 40 },
            no2: { value: 25, unit: "ppb", percent: 36 },
            so2: { value: 5, unit: "ppb", percent: 16 },
            co: { value: 2.5, unit: "ppm", percent: 26 }
        },
        healthAdvice: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.",
        trend: [155, 158, 160, 163, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 168, 165, 162, 165, 165]
    },
    ahmedabad: {
        name: "Ahmedabad, India",
        aqi: 192,
        category: "unhealthy",
        temp: "31°C",
        humidity: "42%",
        wind: "11 km/h",
        pm25: 70,
        pollutants: {
            pm25: { value: 70, unit: "μg/m³", percent: 56 },
            pm10: { value: 115, unit: "μg/m³", percent: 54 },
            o3: { value: 33, unit: "ppb", percent: 46 },
            no2: { value: 29, unit: "ppb", percent: 43 },
            so2: { value: 7, unit: "ppb", percent: 19 },
            co: { value: 3, unit: "ppm", percent: 30 }
        },
        healthAdvice: "Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects.",
        trend: [180, 183, 186, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 195, 192, 189, 192, 192]
    },
    jaipur: {
        name: "Jaipur, India",
        aqi: 245,
        category: "very-unhealthy",
        temp: "29°C",
        humidity: "38%",
        wind: "13 km/h",
        pm25: 85,
        pollutants: {
            pm25: { value: 85, unit: "μg/m³", percent: 64 },
            pm10: { value: 138, unit: "μg/m³", percent: 62 },
            o3: { value: 37, unit: "ppb", percent: 52 },
            no2: { value: 33, unit: "ppb", percent: 49 },
            so2: { value: 8, unit: "ppb", percent: 21 },
            co: { value: 4, unit: "ppm", percent: 36 }
        },
        healthAdvice: "Health alert: everyone may experience more serious health effects. Active children and adults should avoid prolonged outdoor exertion.",
        trend: [230, 233, 236, 240, 243, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245, 248, 245, 242, 245]
    },
    lucknow: {
        name: "Lucknow, India",
        aqi: 268,
        category: "very-unhealthy",
        temp: "30°C",
        humidity: "47%",
        wind: "9 km/h",
        pm25: 92,
        pollutants: {
            pm25: { value: 92, unit: "μg/m³", percent: 66 },
            pm10: { value: 148, unit: "μg/m³", percent: 64 },
            o3: { value: 39, unit: "ppb", percent: 54 },
            no2: { value: 35, unit: "ppb", percent: 51 },
            so2: { value: 9, unit: "ppb", percent: 23 },
            co: { value: 4.5, unit: "ppm", percent: 40 }
        },
        healthAdvice: "Health alert: everyone may experience more serious health effects. Active children and adults should avoid prolonged outdoor exertion.",
        trend: [255, 258, 260, 263, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268, 270, 268, 265, 268]
    }
};

// Current selected city
let currentCity = 'delhi';

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
    initializeCharts();
    updateTime();
    setInterval(updateTime, 1000);
});

// Initialize Dashboard
function initializeDashboard() {
    updateCityDisplay(currentCity);
}

// Setup Event Listeners
function setupEventListeners() {
    // City list items
    const cityItems = document.querySelectorAll('.city-item');
    cityItems.forEach(item => {
        item.addEventListener('click', function() {
            const city = this.dataset.city;
            selectCity(city);
        });
    });

    // City markers on map
    const markers = document.querySelectorAll('.city-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const city = this.dataset.city;
            selectCity(city);
        });
    });

    // Search box
    const searchBox = document.getElementById('citySearch');
    searchBox.addEventListener('input', function(e) {
        filterCities(e.target.value);
    });

    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', function() {
        this.querySelector('svg').style.animation = 'rotate 1s linear';
        setTimeout(() => {
            this.querySelector('svg').style.animation = '';
        }, 1000);
        
        // Simulate data refresh
        updateCityDisplay(currentCity);
        updateCharts();
    });

    // API buttons
    document.querySelector('.api-docs-btn').addEventListener('click', function() {
        alert('API Documentation would open here. This is a demo interface for urban planners.');
    });

    document.querySelector('.api-key-btn').addEventListener('click', function() {
        alert('API Key generation would start here. This is a demo interface for urban planners.');
    });
}

// Select City
function selectCity(cityId) {
    currentCity = cityId;
    
    // Update active state in city list
    document.querySelectorAll('.city-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.city === cityId) {
            item.classList.add('active');
        }
    });
    
    // Update display
    updateCityDisplay(cityId);
    updateCharts();
}

// Update City Display
function updateCityDisplay(cityId) {
    const city = cityData[cityId];
    if (!city) return;
    
    // Update city name and AQI
    document.getElementById('cityName').textContent = city.name;
    const aqiLarge = document.getElementById('cityAqiLarge');
    aqiLarge.textContent = city.aqi;
    aqiLarge.className = `city-aqi-large ${city.category}`;
    
    // Update weather info
    document.getElementById('temp').textContent = city.temp;
    document.getElementById('humidity').textContent = city.humidity;
    document.getElementById('wind').textContent = city.wind;
    document.getElementById('pm25').textContent = city.pm25;
    
    // Update pollutants
    updatePollutant('pm25', city.pollutants.pm25);
    updatePollutant('pm10', city.pollutants.pm10);
    updatePollutant('o3', city.pollutants.o3);
    updatePollutant('no2', city.pollutants.no2);
    updatePollutant('so2', city.pollutants.so2);
    updatePollutant('co', city.pollutants.co);
    
    // Update health advice
    document.getElementById('healthAdvice').textContent = city.healthAdvice;
}

// Update Pollutant
function updatePollutant(pollutantId, data) {
    const valueEl = document.getElementById(`${pollutantId}Val`);
    const barEl = document.getElementById(`${pollutantId}Bar`);
    
    if (valueEl && barEl) {
        valueEl.textContent = `${data.value} ${data.unit}`;
        barEl.style.width = `${data.percent}%`;
        
        // Update color based on percentage
        barEl.className = 'progress-fill';
        if (data.percent >= 70) {
            barEl.classList.add('hazardous');
        } else if (data.percent >= 60) {
            barEl.classList.add('very-unhealthy');
        } else if (data.percent >= 50) {
            barEl.classList.add('unhealthy');
        } else if (data.percent >= 40) {
            barEl.classList.add('usg');
        } else if (data.percent >= 30) {
            barEl.classList.add('moderate');
        } else {
            barEl.classList.add('good');
        }
    }
}

// Filter Cities
function filterCities(searchTerm) {
    const cityItems = document.querySelectorAll('.city-item');
    searchTerm = searchTerm.toLowerCase();
    
    cityItems.forEach(item => {
        const cityName = item.querySelector('.city-name').textContent.toLowerCase();
        if (cityName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Update Time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
        timeZoneName: 'short'
    };
    const timeString = now.toLocaleString('en-IN', options);
    document.getElementById('updateTime').textContent = timeString;
}

// ===================================
// CHARTS
// ===================================

let aqiTrendChart, pollutantChart, correlationChart;

// Initialize Charts
function initializeCharts() {
    initAQITrendChart();
    initPollutantChart();
    initCorrelationChart();
}

// Update Charts
function updateCharts() {
    updateAQITrendChart();
    updatePollutantChart();
    updateCorrelationChart();
}

// AQI Trend Chart
function initAQITrendChart() {
    const ctx = document.getElementById('aqiTrendChart');
    if (!ctx) return;
    
    const city = cityData[currentCity];
    const labels = Array.from({length: 30}, (_, i) => `Day ${i + 1}`);
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(255, 82, 82, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 82, 82, 0.05)');
    
    aqiTrendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'AQI',
                data: city.trend,
                borderColor: '#ff5252',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#ff5252',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#ff5252',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'AQI: ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6b7a8f',
                        maxTicksLimit: 10
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6b7a8f'
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Pollutant Chart
function initPollutantChart() {
    const ctx = document.getElementById('pollutantChart');
    if (!ctx) return;
    
    const city = cityData[currentCity];
    
    pollutantChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['PM2.5', 'PM10', 'O₃', 'NO₂', 'SO₂', 'CO'],
            datasets: [{
                data: [
                    city.pollutants.pm25.value,
                    city.pollutants.pm10.value,
                    city.pollutants.o3.value,
                    city.pollutants.no2.value,
                    city.pollutants.so2.value,
                    city.pollutants.co.value * 10 // Scaled for visibility
                ],
                backgroundColor: [
                    '#b71c1c',
                    '#9c27b0',
                    '#ff5252',
                    '#ffa726',
                    '#ffeb3b',
                    '#00e676'
                ],
                borderWidth: 0,
                borderRadius: 5,
                spacing: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#b8c5d6',
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#00d4ff',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const pollutant = ['pm25', 'pm10', 'o3', 'no2', 'so2', 'co'][context.dataIndex];
                            const data = city.pollutants[pollutant];
                            label += data.value + ' ' + data.unit;
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Correlation Chart
function initCorrelationChart() {
    const ctx = document.getElementById('correlationChart');
    if (!ctx) return;
    
    // Simulated correlation data
    const data = {
        labels: ['Delhi', 'Mumbai', 'Jaipur', 'Lucknow', 'Kolkata', 'Ahmedabad', 'Pune', 'Hyderabad', 'Bengaluru', 'Chennai'],
        aqi: [385, 288, 245, 268, 210, 192, 165, 178, 205, 143],
        cases: [1250, 920, 780, 850, 670, 610, 525, 565, 650, 455]
    };
    
    correlationChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'AQI vs Respiratory Cases',
                data: data.aqi.map((aqi, i) => ({ x: aqi, y: data.cases[i] })),
                backgroundColor: '#00d4ff',
                borderColor: '#00d4ff',
                pointRadius: 8,
                pointHoverRadius: 12,
                pointHoverBackgroundColor: '#ff6b35',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#00d4ff',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        title: function(context) {
                            return data.labels[context[0].dataIndex];
                        },
                        label: function(context) {
                            return [
                                'AQI: ' + context.parsed.x,
                                'Respiratory Cases: ' + context.parsed.y
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Air Quality Index (AQI)',
                        color: '#b8c5d6',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6b7a8f'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Respiratory Disease Cases (per 100k)',
                        color: '#b8c5d6',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#6b7a8f'
                    }
                }
            }
        }
    });
}

// Update AQI Trend Chart
function updateAQITrendChart() {
    if (!aqiTrendChart) return;
    
    const city = cityData[currentCity];
    aqiTrendChart.data.datasets[0].data = city.trend;
    
    // Update color based on AQI level
    const color = getAQIColor(city.aqi);
    aqiTrendChart.data.datasets[0].borderColor = color;
    
    const gradient = aqiTrendChart.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color + '80');
    gradient.addColorStop(1, color + '0D');
    aqiTrendChart.data.datasets[0].backgroundColor = gradient;
    
    aqiTrendChart.update('none');
}

// Update Pollutant Chart
function updatePollutantChart() {
    if (!pollutantChart) return;
    
    const city = cityData[currentCity];
    pollutantChart.data.datasets[0].data = [
        city.pollutants.pm25.value,
        city.pollutants.pm10.value,
        city.pollutants.o3.value,
        city.pollutants.no2.value,
        city.pollutants.so2.value,
        city.pollutants.co.value * 10
    ];
    
    pollutantChart.update('none');
}

// Update Correlation Chart (stays the same for all cities)
function updateCorrelationChart() {
    // Correlation chart shows all cities, so no update needed
    // But we can highlight the current city
    if (!correlationChart) return;
    
    const cityNames = ['delhi', 'mumbai', 'jaipur', 'lucknow', 'kolkata', 'ahmedabad', 'pune', 'hyderabad', 'bangalore', 'chennai'];
    const currentIndex = cityNames.indexOf(currentCity);
    
    const colors = correlationChart.data.datasets[0].data.map((_, i) => 
        i === currentIndex ? '#ff6b35' : '#00d4ff'
    );
    
    correlationChart.data.datasets[0].backgroundColor = colors;
    correlationChart.data.datasets[0].borderColor = colors;
    correlationChart.update('none');
}

// Get AQI Color
function getAQIColor(aqi) {
    if (aqi >= 301) return '#b71c1c'; // Hazardous
    if (aqi >= 201) return '#9c27b0'; // Very Unhealthy
    if (aqi >= 151) return '#ff5252'; // Unhealthy
    if (aqi >= 101) return '#ffa726'; // USG
    if (aqi >= 51) return '#ffeb3b';  // Moderate
    return '#00e676'; // Good
}

// Console message
console.log('%c🌍 UrbanAir Insight Dashboard', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cAir Quality × Respiratory Health Intelligence', 'color: #ff6b35; font-size: 14px;');
console.log('%cBuilt for Urban Planners & Health Officials', 'color: #b8c5d6; font-size: 12px;');
