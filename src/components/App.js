import React, { useState } from 'react';
import Search from "./Search";
import Location from "./Location";
import Weather from "./Weather";
import Title from "./Title";
import api from "../utils/WeatherApi";

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  function handleSearch () {
    api.getWeatherApi(city)
      .then(result => {
        setWeather(result);
        setCity('');
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className={
      weather.main !== undefined
        ? weather.main.temp > 10
        ? 'app app_warm'
        : 'app app_cold'
        : 'app'
    }>
      <div className='root'>
        <Search
          dataCity={city}
          onAddCity={handleSearch}
          setCity={setCity}
        />

        {weather.main !== undefined ?
          <>
            <Location
              weather={weather}
            />
            <Weather
              weather={weather}
            />
          </>
         : <Title /> }
      </div>
    </div>
  );
}

export default App;
