/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../card/Card.module.css";
import NotFound from "../notfound/NotFound.jsx";
import "./City.css";

export default function Ciudad({ city }) {

  if (city) {
    return (
      <div className="city">
        <div className="ciudad">
          <div className={styles.card}>
            <h2 className="titulo">{city.name}</h2>
            <div className="info">
              <div>Temperatura: {city.temp} ºC</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Cantidad de nubes: {city.clouds}</div>
              <div>Latitud: {city.latitud}º</div>
              <div>Longitud: {city.longitud}º</div>

              <div className="container-button-city">
               

                <a
                  value=""
                  href="javascript: history.go(-1)"
                  className="btn btn-primary"
                >
                  Volver atrás
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
}
