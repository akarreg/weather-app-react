import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Doha" />
      </div>
      <footer>
        <p>
          This project was coded by Ama Akarregi and is open-sourced on{" "}
          <a href="https://github.com/akarreg/weather-react"> GitHub </a>
          and hosted on{" "}
          <a href="https://github.com/akarreg/weather-react">Netlify</a>
        </p>
      </footer>
    </div>
  );
}
