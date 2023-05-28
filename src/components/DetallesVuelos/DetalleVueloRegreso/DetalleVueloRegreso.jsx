import React from 'react'
import timeline from "../../../00 RECURSOS PROYECTO SPRINT 2/images/a26f5a5d1677c840eb556ced719307a3de52c26f.png"
import briefcase from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/briefcase.svg"
import { ReturnFlight } from './StyleDetalleVueloRegreso'

const DetalleVueloRegreso = () => {
  return (
    <ReturnFlight>
      <div className='returnFlightHeader'>
        <article>
          <h2>Vuelo de regreso</h2>
          <h3>Miercoles 08 dic 2021</h3>
          <p>Culiacán a cd. Mex (AICM)</p>
        </article>
        <button>Cambiar vuelo</button>
      </div>

      <h2>Selección de horarios y equipaje</h2>
      <div>

        <div className='timeCard'>
          <h3>07:28 AM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>10:08 AM</h3>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 875 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 1.284 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 2.945 MXN</h3>
          </button>
        </div>

        <div className='timeCard'>
          <h3>07:33 PM</h3>
          <div>
            <p>1h 57 min</p>
            <img src={timeline} alt="timeline" />
            <p>Sin escalas</p>
          </div>
          <h3>10:13 PM</h3>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>1 objeto personal</p>
            <h3>$ 875 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p>Equipaje de mano</p>
            <h3>$ 1.284 MXN</h3>
          </button>
          <button className='briefcaseButton'>
            <img src={briefcase} alt="briefcase" />
            <p> Equpaje 25kg</p>
            <h3>$ 2.945 MXN</h3>
          </button>
        </div>
      </div>
    </ReturnFlight>
  )
}

export default DetalleVueloRegreso