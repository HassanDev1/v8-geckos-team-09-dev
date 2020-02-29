import React from "react";

import "../style/Weather.css";
import FutureWeather from "./FutureForecast";
import CurrentWeather from "./CurrentWeather";

const Weather = props => {
  return props.forecast.map((cast, idx) => {
    return (
      <div
        className="weather-container"
        key={idx}
      >
        <div className="weather-container-inner">
          <CurrentWeather
            city={cast.location.name}
            currentTemp={cast.current.temp_f}
            time={cast.location.localtime}
          />
          <FutureWeather
            day1={cast.forecast.forecastday[1].date_epoch}
            icon1={cast.forecast.forecastday[1].day.condition.icon}
            minTemp1={cast.forecast.forecastday[1].day.mintemp_f}
            maxTemp1={cast.forecast.forecastday[1].day.maxtemp_f}
            day2={cast.forecast.forecastday[2].date_epoch}
            icon2={cast.forecast.forecastday[2].day.condition.icon}
            minTemp2={cast.forecast.forecastday[2].day.mintemp_f}
            maxTemp2={cast.forecast.forecastday[2].day.maxtemp_f}
            day3={cast.forecast.forecastday[3].date_epoch}
            icon3={cast.forecast.forecastday[3].day.condition.icon}
            minTemp3={cast.forecast.forecastday[3].day.mintemp_f}
            maxTemp3={cast.forecast.forecastday[3].day.maxtemp_f}
          />
        </div>
      </div>
    );
  });
};

export default Weather;
