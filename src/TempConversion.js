import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function giveFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function giveCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TempConversion">
        <h2 id="temperature">
          {Math.round(props.celsius)}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={giveFahrenheit} className="fahrenheit">
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TempConversion">
        <h2 id="temperature">
          {Math.round(fahrenheit)}
          <span className="units">
            <a href="/" onClick={giveCelsius} className="celsius">
              °C
            </a>{" "}
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
