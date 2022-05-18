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
              <div className="container-button">
              {/* <input type="button" value="Página anterior" onClick="http://localhost:3000/"/> */}

              <button type="button" value="http://localhost:3000/" class="btn btn-primary">
                Volver
              </button>

              </div>
            </div>
            {/* <div className='img'>
                            
                        </div> */}
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
