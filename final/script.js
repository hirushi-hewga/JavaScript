const apiKey = 'ec2a9d7945ae33bb1f7ff0b23ef65ecf'; // Вставте свій API ключ  
const citySelect = document.getElementById('citySelect');  
const getWeatherBtn = document.getElementById('getWeatherBtn');  
const todayTab = document.getElementById('todayTab');  
const forecastTab = document.getElementById('forecastTab');  
const currentWeatherDiv = document.getElementById('currentWeather');  
const hourlyForecastDiv = document.getElementById('hourlyForecast');  
const nearbyPlacesDiv = document.getElementById('nearbyPlaces');  
const fiveDayForecastDiv = document.getElementById('fiveDayForecast');  
const dailyHourlyForecastDiv = document.getElementById('dailyHourlyForecast');  
const errorDiv = document.getElementById('error');  

todayTab.addEventListener('click', () => {  
    showTab('today');  
});  

forecastTab.addEventListener('click', () => {  
    showTab('forecast');  
});  

getWeatherBtn.addEventListener('click', () => {  
    const selectedCity = citySelect.value;  
    getWeather(selectedCity);  
});  

// Функція для показу вкладок  
function showTab(tab) {  
    if (tab === 'today') {  
        todayTab.classList.add('active');  
        forecastTab.classList.remove('active');  
        document.getElementById('today').style.display = 'block';  
        document.getElementById('forecast').style.display = 'none';  
        getWeather(citySelect.value); // Отримати погоду при активації вкладки  
    } else {  
        todayTab.classList.remove('active');  
        forecastTab.classList.add('active');  
        document.getElementById('today').style.display = 'none';  
        document.getElementById('forecast').style.display = 'block';  
        getFiveDayForecast(citySelect.value); // Отримати 5-денний прогноз при активації вкладки  
    }  
}  

// Функція для отримання погоди  
async function getWeather(city) {  
    try {  
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);  
        const data = await response.json();  

        if (response.ok) {  
            displayCurrentWeather(data);  
        } else {  
            throw new Error(data.message || 'Помилка при отриманні даних');  
        }  
    } catch (error) {  
        console.error(error);  
        errorDiv.style.display = 'block';  
        errorDiv.textContent = 'Не вдалося отримати погоду: ' + error.message;  
        currentWeatherDiv.innerHTML = '';  
    }  
}  

// Функція для відображення поточної погоди  
function displayCurrentWeather(data) {  
    const { main, weather, wind, sys, dt } = data;  
    const date = new Date(dt * 1000).toLocaleDateString();  

    // Перевірка наявності даних  
    if (!sys || !sys.sunrise || !sys.sunset) {  
        throw new Error('Дані про сонце недоступні');  
    }  

    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();  
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();  
    const duration = ((sys.sunset - sys.sunrise) / 3600).toFixed(2);  

    currentWeatherDiv.innerHTML = `  
        <h2>${date}</h2>  
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">  
        <p>${weather[0].description}</p>  
        <p>Температура: ${main.temp}°C</p>  
        <p>Відчувається як: ${main.feels_like}°C</p>  
        <p>Світанок: ${sunrise}</p>  
        <p>Захід: ${sunset}</p>  
        <p>Тривалість дня: ${duration} год</p>  
    `;  

    getHourlyForecast(data.coord.lat, data.coord.lon);  
    getNearbyPlaces(data.coord.lat, data.coord.lon);  
}  

// Функція для отримання погодинного прогнозу  
async function getHourlyForecast(lat, lon) {  
    try {  
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);  
        const data = await response.json();  
        let hourlyHtml = '<h3>Погодинний прогноз</h3><table><tr><th>Час</th><th>Температура</th><th>Опис</th></tr>';  

        if (response.ok) {  
            data.list.forEach(item => {  
                const time = new Date(item.dt * 1000).toLocaleTimeString();  
                hourlyHtml += `  
                    <tr>  
                        <td>${time}</td>  
                        <td>${item.main.temp}°C</td>  
                        <td>${item.weather[0].description}</td>  
                    </tr>  
                `;  
            });  
            hourlyForecastDiv.innerHTML = hourlyHtml + '</table>';  
        } else {  
            throw new Error(data.message || 'Помилка при отриманні погодинного прогнозу');  
        }  
    } catch (error) {  
        console.error(error);  
        hourlyForecastDiv.innerHTML = 'Не вдалося отримати погодинний прогноз: ' + error.message;  
    }  
}  

// Функція для отримання найближчих міст  
async function getNearbyPlaces(lat, lon) {  
    // Ваш код для отримання найближчих міст  
}  

// Функція для отримання 5-денного прогнозу  
async function getFiveDayForecast(city) {  
    try {  
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);  
        const data = await response.json();  

        if (response.ok) {  
            displayFiveDayForecast(data);  
        } else {  
            throw new Error(data.message || 'Помилка при отриманні 5-денного прогнозу');  
        }  
    } catch (error) {  
        console.error(error);  
        fiveDayForecastDiv.innerHTML = 'Не вдалося отримати 5-денний прогноз: ' + error.message;  
    }  
}  

// Функція для відображення 5-денного прогнозу  
function displayFiveDayForecast(data) {  
    let forecastHtml = '<h3>5-денний прогноз</h3>';  
    const days = {};  

    data.list.forEach(item => {  
        const date = new Date(item.dt * 1000).toLocaleDateString();  
        if (!days[date]) {  
            days[date] = { count: 0, temp: 0, weather: item.weather[0].description, icon: item.weather[0].icon };  
        }  
        days[date].count++;  
        days[date].temp += item.main.temp;  
    });  

    for (const date in days) {  
        const avgTemp = (days[date].temp / days[date].count).toFixed(1);  
        forecastHtml += `  
            <div class="day-forecast" onclick="getDailyForecast('${date}')">  
                <h4>${date}</h4>  
                <img src="http://openweathermap.org/img/wn/${days[date].icon}.png" alt="${days[date].weather}">  
                <p>${avgTemp}°C</p>  
            </div>  
        `;  
    }  

    fiveDayForecastDiv.innerHTML = forecastHtml;  
}  

// Функція для отримання прогнозу для вибраного дня  
async function getDailyForecast(date) {  
    try {  
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`);  
        const data = await response.json();  

        const dailyForecast = data.list.filter(item => {  
            const forecastDate = new Date(item.dt * 1000).toLocaleDateString();  
            return forecastDate === date;  
        });  

        let hourlyHtml = `<h3>Погодні дані для ${date}</h3><table><tr><th>Час</th><th>Температура</th><th>Опис</th></tr>`;  
        
        if (dailyForecast.length > 0) {  
            dailyForecast.forEach(item => {  
                const time = new Date(item.dt * 1000).toLocaleTimeString();  
                hourlyHtml += `  
                    <tr>  
                        <td>${time}</td>  
                        <td>${item.main.temp}°C</td>  
                        <td>${item.weather[0].description}</td>  
                    </tr>  
                `;  
            });  
            dailyHourlyForecastDiv.innerHTML = hourlyHtml + '</table>';  
        } else {  
            throw new Error('Дані для вибраного дня недоступні');  
        }  
    } catch (error) {  
        console.error(error);  
        dailyHourlyForecastDiv.innerHTML = 'Не вдалося отримати прогноз для вибраного дня: ' + error.message;  
    }  
}  

// Виклик функції для отримання погоди при завантаженні сторінки  
window.onload = () => {  
    getWeather(citySelect.value); // Отримати прогноз для початково вибраного міста  
};  