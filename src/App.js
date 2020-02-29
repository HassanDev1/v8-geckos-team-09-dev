import React from "react";
import Quote from "./components/Quote";
import Weather from "./components/WeatherApiCall";
import Todos from "./components/Todos";
import "./App.css";

import AAA from "./backgrounds/aaa.jpg";
import BBB from "./backgrounds/bbb.jpg";
import CCC from "./backgrounds/ccc.jpg";
import DDD from "./backgrounds/ddd.jpg";
import EEE from "./backgrounds/eee.jpg";
import FFF from "./backgrounds/fff.jpg";
import GGG from "./backgrounds/ggg.jpg";
import HHH from "./backgrounds/hhh.jpg";
import III from "./backgrounds/iii.jpg";
import JJJ from "./backgrounds/jjj.jpg";

class App extends React.Component {
  constructor() {
    super()
    
    let d = new Date()
      this.state = {
        time: d.toLocaleTimeString(),
        greeting: "Hello",
        divStyle: {
          backgroundImage: `url(${AAA})`
        },
        backgrounds: [
          AAA,
          BBB,
          CCC,
          DDD,
          EEE,
          FFF,
          GGG,
          HHH,
          III,
          JJJ
        ]
      }
    this.countingSecond = this.countingSecond.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  setBackground(){
    let divStyle = {...this.state.divStyle}

    divStyle.backgroundImage = `url(${this.state.backgrounds[Math.floor(Math.random() * 10)]})`
    this.setState({divStyle})
  }
  
  countingSecond() {
    let d = new Date();
    let greeting;
    
    if (d.getHours() < 10) {
      greeting = "Good morning";
    } else if (d.getHours() < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }

    this.setState({
      time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }),
      greeting: greeting
    });
  }

  componentWillMount() {
    setInterval(this.countingSecond, 1000);
  }

  render() {
    return (
      <div className="App" style = {this.state.divStyle}>
        <main className="app-inner">
          <button className="background-button" onClick={this.setBackground}>change background</button>
          <Weather />
          <ul className='clock-container'>
            <div className='clock-container-inner'>
              <li className='clock-time'>{this.state.time}</li>
              <li className='greeting'>{this.state.greeting}!</li>
            </div>
          </ul>
          <Quote />
          <Todos />
        </main>
      </div>
    );
  }
}

export default App;
