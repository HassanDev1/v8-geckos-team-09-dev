import React from "react";
import Moment from "react-moment";
import moment from "moment";
import Draggable from "react-draggable";
import '../style/FutureForecast.css';

const FutureWeather = props => {
  const {
    day1,
    icon1,
    minTemp1,
    maxTemp1,
    day2,
    icon2,
    minTemp2,
    maxTemp2,
    day3,
    icon3,
    minTemp3,
    maxTemp3
  } = props;
  return (
    <Draggable>
      <div className="forecast">
        <div className="w3-third w3-center">
          <h3 className="days">
            <Moment format="ddd">{moment.unix(day1).utc()}</Moment>
          </h3>

          <img src={icon1} alt="sun" style={{ width: 60 + "px" }} />
          <p>
            {" "}
            L: {minTemp1}
            <sup>°</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp1}
            <sup>°</sup>
          </p>
        </div>
        <div className="w3-third w3-center">
          <h3 className="days">
            <Moment format="ddd">{moment.unix(day2).utc()}</Moment>
          </h3>
          <img src={icon2} alt="cloud" style={{ width: 60 + "px" }} />
          <p>
            {" "}
            L: {minTemp2}
            <sup>°</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp2}
            <sup>°</sup>
          </p>
        </div>
        <div className="w3-third w3-center w3-margin-bottom">
          <h3 className="days">
            <Moment format="ddd">{moment.unix(day3).utc()}</Moment>
          </h3>
          <img src={icon3} alt="clouds" style={{ width: 60 + "px" }} />
          <p>
            {" "}
            L: {minTemp3}
            <sup>°</sup>
          </p>
          <p>
            {" "}
            H: {maxTemp3}
            <sup>°</sup>
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default FutureWeather;
