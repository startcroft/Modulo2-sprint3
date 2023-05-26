import React from 'react'
import DetalleVueloSalida from './DetalleVueloSalida/DetalleVueloSalida'
import DetalleVueloRegreso from './DetalleVueloRegreso/DetalleVueloRegreso'
import YourReservation from './yourReservation/YourReservation'

const DetalleVuelo = () => {
  return (
     <>
      <div style={{background: "#f0f1e9" }}>
        <DetalleVueloSalida />
        <DetalleVueloRegreso />
      </div>
      <YourReservation/>


    </>
  )
}

export default DetalleVuelo