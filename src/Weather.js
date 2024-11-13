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
            <div className="col-2">Tuesday</div>
            <div className="col-2">Wednesday</div>
            <div className="col-2">Thusday</div>
            <div className="col-2">Friday</div>
            <div className="col-2">Saturday</div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = " bc0c992ff01fe3156bt9ead9dob31418";
    let city = "london";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handResponse);
    return "Loading ....";
  }
}
