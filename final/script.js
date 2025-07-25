


function forecastHandler() {
    window.location = "./5-day"
}



async function searchHandler() {
    const input = document.getElementById("input").value
    if (input.trim() === "") return
    document.getElementById("input").value = ""
    loadWeather(input.trim())
}



document.addEventListener("DOMContentLoaded", () => {
    loadWeather("geolocation" in navigator ? "" : "Rivne")
})



async function loadWeather(input) {
    const weatherApiKey = 'ec2a9d7945ae33bb1f7ff0b23ef65ecf'
    const geoDbApiKey = 'ae64cde335msh0c4fb4f82e854b1p1556ffjsn3b5d3d5f7d67'
    const { latitude, longitude } = await getCurrentPos()
    if (!input) {
        const currentWeather = await getCurrentWeatherByPos(weatherApiKey, latitude, longitude)
        const hourlyWeather = await getHourlyWeatherByPos(weatherApiKey)
        const nearbyWeather = await getNearbyWeatherByPos(geoDbApiKey, weatherApiKey)
        setCurrentWeather(currentWeather)
        setHourlyWeather(hourlyWeather)
        setNearbyWeather(nearbyWeather)
    } else {
        const currentWeather = await gerCurrentWeatherByCity(input, weatherApiKey)
        const hourlyWeather = await getHourlyWeatherByCity(input, weatherApiKey)
        const nearbyWeather = await getNearbyWeatherByCity(input, geoDbApiKey, weatherApiKey)
        setCurrentWeather(currentWeather)
        setHourlyWeather(hourlyWeather)
        setNearbyWeather(nearbyWeather)
    }
}



async function gerCurrentWeatherByCity(input, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`

    const responce = await fetch(url)
    const data = await responce.json()
    return data
}



async function getCurrentWeatherByPos(apiKey, lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    const responce = await fetch(url)
    const data = await responce.json()
    return data
}



async function getHourlyWeatherByCity(input, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=metric`

    const responce = await fetch(url)
    const data = await responce.json()
    return data
}



async function getHourlyWeatherByPos(apiKey) {
    const { latitude, longitude } = await getCurrentPos()
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    const responce = await fetch(url)
    const data = await responce.json()
    return data
}



async function getNearbyWeatherByCity(input, geoDbApiKey, weatherApiKey)
{
    const cityId = await getCityIdByName(input, geoDbApiKey)
    const limit = 6
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/places/${cityId}/nearbyPlaces?limit=${limit}&offset=0&types=CITY&radius=100`
    const responce = await fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-key": geoDbApiKey,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    })
    const result = await responce.json()
    const cities = result.data
    const data = await Promise.all(
        cities.map(async city => {
            const lat = city.latitude;
            const lon = city.longitude;
            const weatherData = await getCurrentWeatherByPos(weatherApiKey, lat, lon);
            return {
                cityName: city.name,
                icon: weatherData.weather[0].icon,
                temp: Math.round(weatherData.main.temp)
            };
        })
    );
    return data
}



async function getNearbyWeatherByPos(geoDbApiKey, weatherApiKey)
{
    const { latitude, longitude } = await getCurrentPos()
    const limit = 6
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}+${longitude}/nearbyPlaces?limit=${limit}&offset=0&types=CITY&radius=100`
    const responce = await fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-key": geoDbApiKey,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    })
    const result = await responce.json()
    const cities = result.data
    console.log(cities)
    const data = await Promise.all(
        cities.map(async city => {
            const lat = city.latitude;
            const lon = city.longitude;
            const weatherData = await getCurrentWeatherByPos(weatherApiKey, lat, lon);
            return {
                cityName: city.name,
                icon: weatherData.weather[0].icon,
                temp: Math.round(weatherData.main.temp)
            };
        })
    );
    return data
}



async function getCityIdByName(cityName, apiKey) {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}&limit=1&offset=0`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    })

    const result = await response.json()
    return result.data[0]?.id || null
}



function setCurrentWeather(data) {
    const currentWeather = document.getElementById("currentWeather")
    document.getElementById("input").placeholder = `${data.name}, ${data.sys.country}`

    currentWeather.innerHTML = `<div class="container-head">
                <p class="text-primary">CURRENT WEATHER</p>
                <p class="text-primary">${formatDate(data.dt)}</p>
            </div>
            <div style="display: flex; justify-content: space-evenly;" class="container-body">
                <div style="display:flex; flex-direction:column; align-items:center">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    <p class="text-body-secondary">${data.weather[0].main}</p>
                </div>
                <div style="display:flex; flex-direction:column; justify-content:center;">
                    <h1>${Math.round(data.main.temp)}°C</h1>
                    <p style="font-size: 0.9em;">Real Feel ${Math.round(data.main.feels_like)}°</p>
                </div>
                <div style="display:flex; align-items:center">
                    <div class="pe-1">
                        <p>Sunrise:</p>
                        <p>Sunset:</p>
                        <p>Duration:</p>
                    </div>
                    <div class="ps-1">
                        <p>${formatTime(data.sys.sunrise)}</p>
                        <p>${formatTime(data.sys.sunset)}</p>
                        <p>${getDifference(data.sys.sunrise, data.sys.sunset)}</p>
                    </div>
                </div>
            </div>`
}



function setHourlyWeather(data) {
    const hourlyWeather = document.getElementById("hourlyWeather")
    data = data.list.slice(0, 6)

    let weather = ""

    data.forEach(item => {
        const icon = item.weather[0].icon
        const temp = Math.round(item.main.temp.toFixed(1))
        const feelsLike = Math.round(item.main.feels_like.toFixed(1))
        const wind = Math.round((item.wind.speed * 3.6).toFixed(1))
        const windDirection = getWindDirection(item.wind.deg)

        weather += `<div style="width: 110px; display: flex; flex-direction: column;">
                        <p style="font-size: 1.05em;" class="text-body-secondary">${item.dt_txt.split(' ')[1].slice(0, 5)}</p>
                        <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                        <p style="font-size: 1.05em; flex-grow: 1;" class="text-body-secondary">${item.weather[0].description}</p>
                        <hr class="mt-2 mb-2"><p class="text-body-secondary">${temp}°</p>
                        <hr class="mt-2 mb-2"><p class="text-body-secondary">${feelsLike}°</p>
                        <hr class="mt-2 mb-2"><p class="text-body-secondary">${wind} ${windDirection}</p>
                    </div>`
    })
    hourlyWeather.innerHTML = weather
}



function setNearbyWeather(data)
{
    const nearbyWeather = document.getElementById("nearbyWeather")
    
    let weather = ""

    data.forEach(item => {
        weather += `<div class="d-flex m-1" style="justify-content: space-between; align-items: center; background-color: rgb(130, 177, 179); box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1); box-shadow: inset -2px -2px 1px rgba(255, 255, 255, 0.19); border-radius: 5px;">
                        <p class="text-body-secondary p-2 ms-2">${item.cityName}</p>
                        <div class="me-4" style="display: flex; align-items: center;">
                            <img class="me-3" style="height: 30px;" src="https://openweathermap.org/img/wn/${item.icon}@2x.png"/>
                            <p class="text-body-secondary">${item.temp}°C</p>
                        </div>
                    </div>`
    })

    nearbyWeather.innerHTML = weather
}



async function getCurrentPos() {
    return await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {  
            const {latitude, longitude} = position.coords
            resolve({latitude, longitude})
        }, (error) => {
            reject(error)
        })
    });  
}



function formatDate(timestamp) {
    const date = new Date(timestamp * 1000)
    return `${date.getFullYear()}.` + 
           `${String(date.getMonth() + 1).padStart(2, '0')}.` + 
           `${String(date.getDate()).padStart(2, '0')}`
}



function formatTime(timestamp) {
    const date = new Date(timestamp * 1000)
    const options = {hour: 'numeric', minute: '2-digit', hour12: true}
    return date.toLocaleTimeString('en-US', options)
}



function getDifference(time1, time2) {
    const difference = time1 < time2 ? (time2 - time1) * 1000 : (time1 - time2) * 1000
    const hours = Math.floor(difference / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}:${minutes.toString().padStart(2, '0')} hr`
}



function getWindDirection(deg) {
    const directions = [
        'N', 'NNE', 'NE', 'ENE',
        'E', 'ESE', 'SE', 'SSE',
        'S', 'SSW', 'SW', 'WSW',
        'W', 'WNW', 'NW', 'NNW'
    ];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
}



                    

                        











// const apiKey = 'ec2a9d7945ae33bb1f7ff0b23ef65ecf';
// const citySelect = document.getElementById('citySelect');  
// const getWeatherBtn = document.getElementById('getWeatherBtn');  
// const todayTab = document.getElementById('todayTab');  
// const forecastTab = document.getElementById('forecastTab');  
// const currentWeatherDiv = document.getElementById('currentWeather');  
// const hourlyForecastDiv = document.getElementById('hourlyForecast');  
// const nearbyPlacesDiv = document.getElementById('nearbyPlaces');  
// const fiveDayForecastDiv = document.getElementById('fiveDayForecast');  
// const dailyHourlyForecastDiv = document.getElementById('dailyHourlyForecast');  
// const errorDiv = document.getElementById('error');  

// todayTab.addEventListener('click', () => {  
//     showTab('today');  
// });  

// forecastTab.addEventListener('click', () => {  
//     showTab('forecast');  
// });  

// getWeatherBtn.addEventListener('click', () => {  
//     const selectedCity = citySelect.value;  
//     getWeather(selectedCity);  
// });  
 
// function showTab(tab) {  
//     if (tab === 'today') {  
//         todayTab.classList.add('active');  
//         forecastTab.classList.remove('active');  
//         document.getElementById('today').style.display = 'block';  
//         document.getElementById('forecast').style.display = 'none';  
//         getWeather(citySelect.value);
//     } else {  
//         todayTab.classList.remove('active');  
//         forecastTab.classList.add('active');  
//         document.getElementById('today').style.display = 'none';  
//         document.getElementById('forecast').style.display = 'block';  
//         getFiveDayForecast(citySelect.value); 
//     }  
// }  

// async function getWeather(city) {  
//     try {  
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);  
//         const data = await response.json();  

//         if (response.ok) {  
//             displayCurrentWeather(data);  
//         } else {  
//             throw new Error(data.message || 'Помилка при отриманні даних');  
//         }  
//     } catch (error) {  
//         console.error(error);  
//         errorDiv.style.display = 'block';  
//         errorDiv.textContent = 'Не вдалося отримати погоду: ' + error.message;  
//         currentWeatherDiv.innerHTML = '';  
//     }  
// }  

// function displayCurrentWeather(data) {  
//     const { main, weather, wind, sys, dt } = data;  
//     const date = new Date(dt * 1000).toLocaleDateString();  

//     if (!sys || !sys.sunrise || !sys.sunset) {  
//         throw new Error('Дані про сонце недоступні');  
//     }  

//     const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();  
//     const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();  
//     const duration = ((sys.sunset - sys.sunrise) / 3600).toFixed(2);  

//     currentWeatherDiv.innerHTML = `  
//         <h2>${date}</h2>  
//         <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">  
//         <p>${weather[0].description}</p>  
//         <p>Температура: ${main.temp}°C</p>  
//         <p>Відчувається як: ${main.feels_like}°C</p>  
//         <p>Світанок: ${sunrise}</p>  
//         <p>Захід: ${sunset}</p>  
//         <p>Тривалість дня: ${duration} год</p>  
//     `;  

//     getHourlyForecast(data.coord.lat, data.coord.lon);  
//     getNearbyPlaces(data.coord.lat, data.coord.lon);  
// }  

// async function getHourlyForecast(lat, lon) {  
//     try {  
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);  
//         const data = await response.json();  
//         let hourlyHtml = '<h3>Погодинний прогноз</h3><table><tr><th>Час</th><th>Температура</th><th>Опис</th></tr>';  

//         if (response.ok) {  
//             data.list.forEach(item => {  
//                 const time = new Date(item.dt * 1000).toLocaleTimeString();  
//                 hourlyHtml += `  
//                     <tr>  
//                         <td>${time}</td>  
//                         <td>${item.main.temp}°C</td>  
//                         <td>${item.weather[0].description}</td>  
//                     </tr>  
//                 `;  
//             });  
//             hourlyForecastDiv.innerHTML = hourlyHtml + '</table>';  
//         } else {  
//             throw new Error(data.message || 'Помилка при отриманні погодинного прогнозу');  
//         }  
//     } catch (error) {  
//         console.error(error);  
//         hourlyForecastDiv.innerHTML = 'Не вдалося отримати погодинний прогноз: ' + error.message;  
//     }  
// }  

// async function getNearbyPlaces(lat, lon) {  
// }  
 
// async function getFiveDayForecast(city) {  
//     try {  
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);  
//         const data = await response.json();  

//         if (response.ok) {  
//             displayFiveDayForecast(data);  
//         } else {  
//             throw new Error(data.message || 'Помилка при отриманні 5-денного прогнозу');  
//         }  
//     } catch (error) {  
//         console.error(error);  
//         fiveDayForecastDiv.innerHTML = 'Не вдалося отримати 5-денний прогноз: ' + error.message;  
//     }  
// }  

// function displayFiveDayForecast(data) {  
//     let forecastHtml = '<h3>5-денний прогноз</h3>';  
//     const days = {};  

//     data.list.forEach(item => {  
//         const date = new Date(item.dt * 1000).toLocaleDateString();  
//         if (!days[date]) {  
//             days[date] = { count: 0, temp: 0, weather: item.weather[0].description, icon: item.weather[0].icon };  
//         }  
//         days[date].count++;  
//         days[date].temp += item.main.temp;  
//     });  

//     for (const date in days) {  
//         const avgTemp = (days[date].temp / days[date].count).toFixed(1);  
//         forecastHtml += `  
//             <div class="day-forecast" onclick="getDailyForecast('${date}')">  
//                 <h4>${date}</h4>  
//                 <img src="http://openweathermap.org/img/wn/${days[date].icon}.png" alt="${days[date].weather}">  
//                 <p>${avgTemp}°C</p>  
//             </div>  
//         `;  
//     }  

//     fiveDayForecastDiv.innerHTML = forecastHtml;  
// }  

// async function getDailyForecast(date) {  
//     try {  
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`);  
//         const data = await response.json();  

//         const dailyForecast = data.list.filter(item => {  
//             const forecastDate = new Date(item.dt * 1000).toLocaleDateString();  
//             return forecastDate === date;  
//         });  

//         let hourlyHtml = `<h3>Погодні дані для ${date}</h3><table><tr><th>Час</th><th>Температура</th><th>Опис</th></tr>`;  
        
//         if (dailyForecast.length > 0) {  
//             dailyForecast.forEach(item => {  
//                 const time = new Date(item.dt * 1000).toLocaleTimeString();  
//                 hourlyHtml += `  
//                     <tr>  
//                         <td>${time}</td>  
//                         <td>${item.main.temp}°C</td>  
//                         <td>${item.weather[0].description}</td>  
//                     </tr>  
//                 `;  
//             });  
//             dailyHourlyForecastDiv.innerHTML = hourlyHtml + '</table>';  
//         } else {  
//             throw new Error('Дані для вибраного дня недоступні');  
//         }  
//     } catch (error) {  
//         console.error(error);  
//         dailyHourlyForecastDiv.innerHTML = 'Не вдалося отримати прогноз для вибраного дня: ' + error.message;  
//     }  
// }  

// window.onload = () => {  
//     getWeather(citySelect.value);
// };  