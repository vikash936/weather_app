// import "./currentweather.css";

// const CurrentWeather = () => {
//   return (
//     <>
//       <div className="weather">
//         <div className="top">
//           <div>
//             <p className="city">Chennai</p>
//             <p className="weather-desc">Sunny</p>
//           </div>
//           <img alt="weather" className="weather-icon" src="icons/01d.png" />
//         </div>
//         <div className="bottom">
//           <p className="temp">18°C</p>
//           <div className="Details">
//             <div className="para-row">
//               <span className="para-lable">Details</span>
//             </div>
//             <div className="para-row">
//               <span className="para-lable">Feels like</span>
//               <span className="para-value">28°C</span>
//             </div>
//             <div className="para-row">
//               <span className="para-lable">Wind</span>
//               <span className="para-value">2 m/s</span>
//             </div>
//             <div className="para-row">
//               <span className="para-lable">Humidity</span>
//               <span className="para-value">40%</span>
//             </div>
//             <div className="para-row">
//               <span className="para-lable">Pressure</span>
//               <span className="para-value">15 hpa</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default CurrentWeather;


import React from "react";
import "./currentweather.css"

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
