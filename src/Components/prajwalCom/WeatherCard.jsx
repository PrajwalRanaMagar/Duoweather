import { FaCloud, FaDroplet, FaGauge } from 'react-icons/fa6';

const WeatherCard = ({ data }) => (
  <section className="pt-4 text-center  ">
    {/* City and country flag */}
    <div className="font-bold text-lg flex items-center justify-center gap-2 ">
      <h2 className="text-base sm:text-lg">{data.name}</h2>
      <img
        src={`https://flagsapi.com/${data.sys.country}/flat/32.png`}
        alt="flag"
        className="w-6 h-6 sm:w-8 sm:h-8"
      />
    </div>

    {/* Weather icon and temperature */}
    <div className="my-4 ">
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="weather icon"
        className="w-28 sm:w-36 mx-auto filter drop-shadow-xl"
      />
      <figcaption className="text-3xl sm:text-4xl font-bold">
        {Math.round(data.main.temp)}
        <sup className="text-base sm:text-xl">°</sup>
      </figcaption>
    </div>

    {/* Description */}
    <p className="text-gray-600 mb-6 capitalize text-sm sm:text-base">
      {data.weather[0].description}
    </p>

    {/* Weather details */}
   <ul className="grid grid-cols-3 gap-2">
      <li className="bg-[#f78a55] text-white rounded-xl p-4 bg-gradient-to-b from-transparent via-black/10">
        <span className="text-sm">Clouds</span>
        <FaCloud className="text-2xl my-4 mx-auto" />
        <span>{data.clouds.all}%</span>
      </li>
      <li className="bg-[#b56291] text-white rounded-xl p-4 bg-gradient-to-b from-transparent via-black/10">
        <span className="text-sm">Humidity</span>
        <FaDroplet className="text-2xl my-4 mx-auto" />
        <span>{data.main.humidity}%</span>
      </li>
      <li className="bg-[#48567b] text-white rounded-xl p-4 bg-gradient-to-b from-transparent via-black/10">
        <span className="text-sm">Pressure</span>
        <FaGauge className="text-2xl my-4 mx-auto " />
        <span>{data.main.pressure}hPa</span>
        
      </li>
    </ul>
  </section>
);

export default WeatherCard;
