import { useState } from "react";
import Search from "./components/search";
import CurrentWeather from "./components/current weather/currentweather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
    
    console.log(forecast)
    console.log(currentWeather)
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;



// import Search from './components/search';
// import './App.css';
// import CurrentWeather from './components/current weather/currentweather'
// import { WEATHER_API_URL, WEATHER_API_KEY} from './api';
// import { useState } from 'react';

// function App() {

//   const [currentweather, setCurrentWeather] = useState(null)
//   const [forecast, setForecast] = useState(null)

//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.slipt(" ");
    
//     const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
//     const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

//     Promise.all([currentWeatherFetch, forecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forecastResponse = await response[1].json();

//         setCurrentWeather({city: searchData.label,...weatherResponse });
//         setForecast({city: searchData.label, ...forecastResponse });
//       })
//     .catch((err) => console.log(err))
//   } 
//   console.log(currentweather);
//   console.log(forecast);


//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       <CurrentWeather />
//     </div>
//   );
// }

// export default App;
