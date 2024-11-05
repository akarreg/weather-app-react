import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div className="Weather-App">
      <header>
        <div className="Search">
          <input type="search" placeholder="Enter City"></input>
          <button> Search </button>
        </div>
      </header>
      <main>
        <h1> City name</h1>
        <h3>Date</h3>

        <ul>
          <li>Humidity:</li>
          <li> Wind : </li>
        </ul>
        <Container>
          <Row>
            <Col>Tuesday</Col>

            <Col>Wednesday</Col>
            <Col>Thursday</Col>
            <Col>Friday</Col>
            <Col>Saturday</Col>
          </Row>
        </Container>
      </main>
      <footer>
        <p>
          This project was coded by Ama Akarregi and is open-sourced on GitHub
          and hosted on Netlify
        </p>
      </footer>
    </div>
  );
}
