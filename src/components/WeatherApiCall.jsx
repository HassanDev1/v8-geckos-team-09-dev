import React, { Component } from "react";
//https://cors-anywhere.herokuapp.com/
import WeatherDisplay from "./Weather";

const api_key = "b163c4576f5b4c54b53192208192803";

class Weather extends Component {
  state = {
    forecast: []
  };
  componentDidMount = async () => {
    const response = await fetch(
      `https://api.apixu.com/v1/forecast.json?&days=4&key=${api_key}&q=auto:ip`
    );
    const data = await response.json();

    this.setState({
      forecast: [data]
    });
    console.log(this.state.forecast);
  };

  render() {
    return <WeatherDisplay forecast={this.state.forecast} />;
  }
}

export default Weather;
