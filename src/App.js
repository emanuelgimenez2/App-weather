import React, { useState } from "react";
import Nav from "./components/navbar/Nav";
import Cards from "./components/cards/Cards.jsx";
import City from "./components/city/City.jsx";
import { Route } from "react-router-dom";
import "./App.css";

// const apiKey = process.env.API_KEY
//   console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ apiKey", apiKey)
//   const apiUrl = process.env.API_URL
//   console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ apiUrl", apiUrl)
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "85e6757c938f526630fd706cc7634793";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Llamado a la API

    fetch(` ${apiUrl}?q=${ciudad}&appid=${apiKey}`)
      .then((r) => r.json())

      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => {
            let checkIfExistCity = oldCities.findIndex(
              (i) => i.id === ciudad.id
            );
            return checkIfExistCity > -1
              ? [...oldCities]
              : [...oldCities, ciudad];
          });
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      {/* <Route path="/" element={<Landing />} />  */}
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />

      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => <City city={onFilter(match.params.ciudadId)} />}
      />
      <Route
        path="/"
        exact
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
    </div>
  );
}
