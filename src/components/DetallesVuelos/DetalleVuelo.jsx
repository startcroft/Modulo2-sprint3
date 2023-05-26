import React from 'react'
import DetalleVueloSalida from './DetalleVueloSalida/DetalleVueloSalida'
import DetalleVueloRegreso from './DetalleVueloRegreso/DetalleVueloRegreso'

const DetalleVuelo = () => {
  return (
    <>
      <div>
        <DetalleVueloSalida />
        <DetalleVueloRegreso />
      </div>
      <div>
        <h3>Tu reservación</h3>
        <article>
          <div>
            <h4>Pasajeros</h4>
            <div>
              <p>1 adulto</p>
            </div>
          </div>
          <h4>Vuelo salida</h4>
          <div>
            <div>
              <h2>MEX</h2>
              <p>05:45 PM</p>
            </div>
              <p>____</p>
            <div>
              <h2>CUL</h2>
              <p>06:47 PM</p>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default DetalleVuelo