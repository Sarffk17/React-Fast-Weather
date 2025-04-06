import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href = "https://github.com/Sarffk17"> Kelly Sarff</a> and is on 
          <a href = "https://github.com/Sarffk17/React-Fast-Weather"> GitHub</a> and hosted on 
          <a href = "https://react-fast-weather.netlify.app/"> Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
