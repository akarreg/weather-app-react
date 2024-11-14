import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);
  function handResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <header>
          <form>
            <input type="search" placeholder="   Enter City....." />
            <button> Search </button>
          </form>
        </header>
        <main>
          <div className="MainName">
            <h1> City name</h1>
            <h3>Date </h3>
            <h3>Description</h3>
          </div>
          <div className="row ">
            <div className="col-6 d-flex justify-content-evenly ">
              🌨️ {temperature}
            </div>
            <div className="col-6 d-flex justify-content-evenly">
              <ul>
                <li>Humidity: 100%</li>
                <li> Wind : </li>
                <li> Visibility: </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-2  d-flex justify-content-evenly">Tuesday</div>
            <div className="col-2  d-flex justify-content-evenly">
              Wednesday
            </div>
            <div className="col-2  d-flex justify-content-evenly">Thusday</div>
            <div className="col-2  d-flex justify-content-evenly">Friday</div>
            <div className="col-2  d-flex justify-content-evenly">Saturday</div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "2bd326a60dc89a53287e446e819664df";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handResponse);
    return "Loading....";
  }
}
