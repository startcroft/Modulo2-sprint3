import React from 'react'
import DetalleVueloSalida from './DetalleVueloSalida/DetalleVueloSalida'
import DetalleVueloRegreso from './DetalleVueloRegreso/DetalleVueloRegreso'

const DetalleVuelo = () => {
  return (
    <div>DetalleVuelo
        <DetalleVueloSalida/>
        <DetalleVueloRegreso/>
    </div>
  )
}

export default DetalleVuelo