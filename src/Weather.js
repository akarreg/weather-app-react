import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Container">
      <header>
        <form>
          <input type="search" placeholder="Enter City....."></input>
          <button className="btn-primary"> Search </button>
        </form>
      </header>
      <main>
        <h1> City name</h1>
        <h3>Date </h3>

        <ul>
          <li>Humidity:</li>
          <li> Wind : </li>
          <li> Visibility: </li>
        </ul>

        <div className="Row">
          <div className="Col-6">Wednesday</div>
          <div className="Col">Thursday</div>
          <div className="Col">Friday</div>
          <div className="Col">Saturday</div>
          <div className="Col">Sunday</div>
        </div>
      </main>
    </div>
  );
}
