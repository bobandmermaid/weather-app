import React from "react";

function Weather(props) {

  return (
    <div className='weather'>
      <div className='weather__temp'>
        {Math.round(props.weather.main.temp)}°
      </div>
      <div className='weather__description'>{props.weather.weather[0].description}</div>
    </div>
  );
}

export default Weather;
