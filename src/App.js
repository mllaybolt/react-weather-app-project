import React from "react";
import WeatherDetails from "./WeatherDetails";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <WeatherDetails defaultLocation="Winnipeg" />
        <Footer />
      </div>
    </div>
  );
}
