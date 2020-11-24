import React from "react";
import setDate from '../utils/date'

function Location(props) {

  return (
    <div className='location'>
      <div className='location__title'>{props.weather.name}</div>
      <div className='location__date'>{setDate()}</div>
    </div>
  );
}

export default Location;
