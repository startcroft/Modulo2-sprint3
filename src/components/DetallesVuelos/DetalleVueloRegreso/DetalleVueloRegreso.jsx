import React, { useContext, useState } from 'react'
import timeline from "../../../00 RECURSOS PROYECTO SPRINT 2/images/a26f5a5d1677c840eb556ced719307a3de52c26f.png"
import briefcase from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/briefcase.svg"
import { ReturnFlight } from './StyleDetalleVueloRegreso'
import { FlightContextUno } from '../../context/FlightContextUno'
import { Link } from 'react-router-dom'

const DetalleVueloRegreso = () => {
  const {
    aboutFlight,
    storageCity,
    storageDestiny,
    handleReturnLuggage,
    handleReturnTime } = useContext(FlightContextUno);

    const [luggageSelected, setLuggageSelected] = useState(null);
  
    const handleLuggageSelected = (button) => {
      setLuggageSelected(button);
      console.log(button);
    }

  return (
    <ReturnFlight>
      <div className='returnFlightHeader'>
        <article>
          <h2>Vuelo de regreso</h2>
          <h3>{aboutFlight.returnDate}</h3>
          <p>{storageDestiny.name} a {storageCity.name}</p>
        </article>
        <Link style={{textDecoration:'none'}}  to='/' >
          <button>Cambiar vuelo</button>
        </Link>

      </div>

      <h2>Selección de horarios y equipaje</h2>
      <div>

        <div className='timeCard'>
          <h3>09:30 AM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>10:30 AM</h3>
          <button className={`briefcaseButton ${luggageSelected === "luggage1" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage1`);
                            handleReturnTime({ salida: "09:30 AM", llegada: "10:30 AM"});
                            handleReturnLuggage(150000)
                            }}>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 150.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage2" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage2`);
                            handleReturnTime({ salida: "09:30 AM", llegada: "10:30 AM"});
                            handleReturnLuggage(200000)
                            }}>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 200.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage3" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage3`);
                            handleReturnTime({ salida: "09:30 AM", llegada: "10:30 AM"});
                            handleReturnLuggage(250000)
                            }}>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 250.000</h3>
          </button>
        </div>

        <div className='timeCard'>
          <h3>08:15 PM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>09:15 PM</h3>
          <button className={`briefcaseButton ${luggageSelected === "luggage4" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage4`);
                            handleReturnTime({ salida: "08:15 PM", llegada: "09:15 PM"});
                            handleReturnLuggage(150000)
                            }}>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 150.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage5" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage5`);
                            handleReturnTime({ salida: "08:15 PM", llegada: "09:15 PM"});
                            handleReturnLuggage(200000)
                            }}>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 200.000</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage6" ? "luggageChoosed" : ""}`}
            onClick={() => {handleLuggageSelected(`luggage6`);
                            handleReturnTime({ salida: "08:15 PM", llegada: "09:15 PM"});
                            handleReturnLuggage(250000)}}>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 250.000</h3>
          </button>
        </div>
      </div>


    </ReturnFlight>
  )
}

export default DetalleVueloRegreso