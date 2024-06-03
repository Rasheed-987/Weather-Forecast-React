import React, { useState } from 'react';
import './Forecast.css';

const ForecastCard = ({ day, date, icon, tempHigh, tempLow }) => (
  <div className="forecast-card">
    <div className="day">{day}</div>
    <div className="date">{date}</div>
    <img className="icon" src={icon} alt={`${day} weather icon`} />
    <div className="temperature">
      <span className="high">{tempHigh}°C</span>
      <span className="low">{tempLow}°C</span>
    </div>
  </div>
);

const Forecast = () => {
  const [forecastData, setForecastData] = useState([
    {
      day: "Monday",
      date: "2024-05-27",
      icon: "./logo.png",
      tempHigh: 20,
      tempLow: 15
    },
    {
      day: "Tuesday",
      date: "2024-05-28",
      icon: "dummy-icon-url",
      tempHigh: 22,
      tempLow: 16
    },
    {
      day: "Wednesday",
      date: "2024-05-29",
      icon: "dummy-icon-url",
      tempHigh: 23,
      tempLow: 17
    },
    {
      day: "Thursday",
      date: "2024-05-30",
      icon: "dummy-icon-url",
      tempHigh: 24,
      tempLow: 18
    },
    {
      day: "Friday",
      date: "2024-05-31",
      icon: "dummy-icon-url",
      tempHigh: 25,
      tempLow: 19
    },
    {
      day: "Saturday",
      date: "2024-06-01",
      icon: "dummy-icon-url",
      tempHigh: 26,
      tempLow: 20
    },
    {
      day: "Sunday",
      date: "2024-06-02",
      icon: "dummy-icon-url",
      tempHigh: 27,
      tempLow: 21
    },
  ]);

  return (
    <div className="forecast-container">
      {forecastData.map((day, index) => (
        <ForecastCard
          key={index}
          day={day.day}
          date={day.date}
          icon={day.icon}
          tempHigh={day.tempHigh}
          tempLow={day.tempLow}
        />
      ))}
    </div>
  );
};

export default Forecast;
