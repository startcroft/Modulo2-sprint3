import React from 'react'

const YourReservation = () => {
  return (
    <article>
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
          <h3>Martes, 30 noviembre 2021</h3>
        </article>
      </div>
      <div>
        <h3>Costos de vuelo</h3>
        <article>
            <p>Tarifa base</p>
            <p>$1.505 MXN</p>
        </article>
        <article>
            <p>Descuento promocional</p>
            <p>$1.034 MXN</p>
        </article>
        <article>
            <p>Tarifa base con descuento</p>
            <p>$471 MXN</p>
        </article>
        <article>
            <p>IVA tarifa</p>
            <p>$75 MXN</p>
        </article>
        <article>
            <p>Total</p>
            <p>$548 MXN</p>
        </article>
      </div>
      </article>
  )
}

export default YourReservation
