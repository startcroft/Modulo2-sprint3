import React from 'react'
import DetalleVueloSalida from './DetalleVueloSalida/DetalleVueloSalida'
import DetalleVueloRegreso from './DetalleVueloRegreso/DetalleVueloRegreso'
import YourReservation from './yourReservation/YourReservation'

const DetalleVuelo = () => {
  return (
    <>
      <div style={{ background: "#f0f1e9", display: "flex", width:"100%"}}>
          <div style={{ background: "#f0f1e9", width: "65%" }}>
          <DetalleVueloSalida />
          <DetalleVueloRegreso />
          </div>
        <YourReservation />

      </div>

    </>
  )
}

export default DetalleVuelo