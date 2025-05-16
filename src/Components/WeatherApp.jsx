import React, { useState } from 'react';
import "./Weather.css";

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState('');

  const apiKey = '9d273c484287f2e11c7a2aba52056b16';

  const getWeather = () => {
    if (!city) {
      alert('Please enter a city');
      return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    // Fetch current weather
    fetch(currentWeatherUrl)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          setError(data.message);
          setWeatherData(null);
        } else {
          setError('');
          setWeatherData(data);
        }
      })
      .catch(() => {
        alert('Error fetching current weather data.');
      });

    // Fetch hourly forecast
    fetch(forecastUrl)
      .then(res => res.json())
      .then(data => {
        setHourlyData(data.list.slice(0, 8)); // next 24 hours (3hr intervals)
      })
      .catch(() => {
        alert('Error fetching hourly forecast.');
      });
  };

  return (
    <div id="weather-container">
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <img
            id="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            alt={weatherData.weather[0].description}
            style={{ display: 'block' }}
          />
          <div id="temp-div">
            <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          </div>
          <div id="weather-info">
            <p>{weatherData.name}</p>
            <p>{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
