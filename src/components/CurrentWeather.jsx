import React from "react";
import '../style/CurrentWeather.css';

const CurrentWeather = props => {
  const { city, currentTemp } = props;
  return (
    <div className="current-weather">
      <div className="current-weather-inner">
        {city}
        <p className="current-temp">
          Current: {currentTemp}
          <sup>°</sup>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
