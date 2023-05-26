import React from 'react'
import timeline from "../../../00 RECURSOS PROYECTO SPRINT 2/images/a26f5a5d1677c840eb556ced719307a3de52c26f.png"
import briefcase from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/briefcase.svg"
import { ExitFlight } from "./StyleDetalleVueloSalida"
import { useState } from 'react'

const DetalleVueloSalida = (button) => {
  const [luggageSelected, setLuggageSelected] = useState(null);

  const handleLuggageSelected = (button) => {
    setLuggageSelected(button);
    console.log(button);
  }
  return (
    <ExitFlight>
      <div className='exitFlightHeader'>
        <article>
          <h2>Vuelo de salida</h2>
          <h3>Martes 30 nov 2021</h3>
          <p>cd. Mex (AICM) a culiacán</p>
        </article>
        <button>Cambiar vuelo</button>
      </div>

      <h2>Selección de horarios y equipaje</h2>
      <div>

        <div className='timeCard'>
          <h3>05:50 PM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>06:47 PM</h3>
          <button className={`briefcaseButton ${luggageSelected === "luggage1" ? "luggageChoosed" : ""}`} 
          onClick={ ()=> handleLuggageSelected("luggage1")}>

            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 548 MXN</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage2" ? "luggageChoosed" : ""}`} 
          onClick={ ()=> handleLuggageSelected("luggage2")}>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 1.084 MXN</h3>
          </button>
          <button className={`briefcaseButton ${luggageSelected === "luggage3" ? "luggageChoosed" : ""}`} 
          onClick={ ()=> handleLuggageSelected("luggage3")}> 
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 1.945 MXN</h3>
          </button>
        </div>

        <div className='timeCard'>
          <h3>11:39 PM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>11:43 AM</h3>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 548 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 1.084 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 1.945 MXN</h3>
          </button>
        </div>
      </div>
    </ExitFlight>
  )
}

export default DetalleVueloSalida