import useWeather from '../hooks/prajwalhook/useWeather'; // Handles state and logic: API calls, error handling
import SearchBar from '../components/prajwalCom/SearchBar';
import WeatherCard from '../components/prajwalCom/WeatherCard';

function Home() {
  const {
    searchTerm,
    setSearchTerm,
    weatherData,
    loading,
    error,
    handleSearch,
  } = useWeather(); // Pull all the state and logic from the custom hook

  return (
    <>
    
    <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    handleSearch={handleSearch}
    loading={loading}
    />
    {error && (
      <p className="text-red-500 text-sm text-center mt-4">{error}</p>
    )}
    {weatherData && <WeatherCard data={weatherData} />}
    </>
     
  );
}

export default Home;
