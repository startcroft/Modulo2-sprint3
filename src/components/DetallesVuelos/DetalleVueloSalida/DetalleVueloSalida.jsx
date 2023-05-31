import React, { useContext, useEffect } from 'react'
import timeline from "../../../00 RECURSOS PROYECTO SPRINT 2/images/a26f5a5d1677c840eb556ced719307a3de52c26f.png"
import briefcase from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/briefcase.svg"
import { ExitFlight } from "./StyleDetalleVueloSalida"
import { useState } from 'react'
import { FlightContextUno } from '../../context/FlightContextUno'
import { getTime } from '../../services/getCiudades'
import { Link } from 'react-router-dom'

const DetalleVueloSalida = (button) => {
  const [luggageSelected, setLuggageSelected] = useState(null);
  const handleLuggageSelected = (button) => {
    setLuggageSelected(button);
    console.log(button);
  }

  const {
    aboutFlight,
    storageCity,
    storageDestiny,
    handleDepartureLuggage,
    handleDepartureTime } = useContext(FlightContextUno);

    const [city, setCity] = useState();
    const [destiny, setDestiny] = useState();

   const handleCity = () =>{
    setCity(storageCity);
   }

   const handleDestiny = () =>{
    setCity(storageDestiny);
   }

  var fecha = new Date(aboutFlight.exitDate);
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var año = fecha.getFullYear();

  // Formatear la fecha en el formato deseado (dd/mm/aaaa)
  var fechaFormateada = dia + "-" + mes + "-" + año;


  return (
    <ExitFlight>
      <div className='exitFlightHeader'>
        <article>
          <h2>Vuelo de salida</h2>
          <h3>{aboutFlight.exitDate}</h3>
          <p>{storageCity.name} a {storageDestiny.name}</p>
        </article>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <button>Cambiar vuelo</button>
        </Link>

      </div>

      <h2>Selección de horarios y equipaje</h2>
      <div>
        <div className='timeCard'>
          <h3>07:00 AM</h3>
          <div>
            <p>1h</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>08:00 AM</h3>
          <button className={`briefcaseButton ${luggageSelected === "luggage1" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage1`);
                            handleDepartureTime({ salida: "07:00 AM", llegada: "08:00 AM"});
                            handleDepartureLuggage(150000);
            }}>

            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 150.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage2" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage2`);
                           handleDepartureTime({ salida: "07:00 AM", llegada: "08:00 AM"});
                           handleDepartureLuggage(200000);
          }}>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 200.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage3" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage3`);
                            handleDepartureTime({ salida: "07:00 AM", llegada: "08:00 AM"});
                            handleDepartureLuggage(250000)
          }}>
            <img src={briefcase} alt="briefcase" />
            <p> Equipaje 25kg</p>
            <h3>$ 250.000</h3>
          </button>
        </div>


        <div className='timeCard'>
          <h3>11:00 PM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>12:00 AM</h3>
          <button className={`briefcaseButton ${luggageSelected === "luggage4" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage4`)
                            handleDepartureTime({ salida: "11:00 AM", llegada: "12:00 AM"});
                            handleDepartureLuggage(150000)
            }}>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 150.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage5" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage5`)
                            handleDepartureTime({ salida: "11:00 AM", llegada: "12:00 AM"});
                            handleDepartureLuggage(200000)
            }}>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 200.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage6" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage6`)
                            handleDepartureTime({ salida: "11:00 AM", llegada: "12:00 AM"});
                            handleDepartureLuggage(250000)
            }}>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 250.000</h3>
      </button> 
        </div>
       
      </div>
    </ExitFlight>
  )
}

export default DetalleVueloSalida
 
