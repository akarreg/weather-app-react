import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="Weather-App">
      <Weather />

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
