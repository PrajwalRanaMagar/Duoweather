import { useState, useEffect } from 'react';

export default function useWeather(defaultCity = 'Nepal') {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

  useEffect(() => {
    fetchWeather(defaultCity);
  }, []);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}&q=${city}`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(null), 2000);
    } finally {
      setLoading(false);  //stops the loading spinner
    }
    
  };

  

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Please enter a city name');
      setTimeout(() => setError(null), 2000);
      return;
    }
    fetchWeather(searchTerm);
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    weatherData,
    loading,
    error,
    handleSearch,
  };
}
