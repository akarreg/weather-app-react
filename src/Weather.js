import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <div className="col-6 d-flex justify-content-evenly ">🌨️ 6 C</div>
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
}
