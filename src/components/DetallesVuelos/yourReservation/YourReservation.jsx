import React, { useContext } from 'react'
import { ReservationInfo } from './StyleYourReservation'
import { FlightContextUno } from '../../context/FlightContextUno';

const YourReservation = () => {

  const {
    aboutFlight,
    storageCity,
    storageDestiny} = useContext(FlightContextUno);

  return (
    <ReservationInfo>
      <div>
        <div className='reservationTitle'>
          <h3>Tu reservación</h3>
        </div>

        <article>
          <div className='passengersContainer'>
            <h4>Pasajeros</h4>
            <div>
              <p>{aboutFlight.adultAmount} adultos</p>
              <p>{aboutFlight.childAmount} niños</p>
              <p>{aboutFlight.babyAmount} bebés</p>
            </div>
          </div>
          <h4>Vuelo salida</h4>
          <div className='flightDestination'>
            <div>
              <h2>{storageCity.aeropuerto}</h2>
              <p>05:45 PM</p>
            </div>
            <p>___</p>
            <div>
              <h2>{storageDestiny.aeropuerto}</h2>
              <p>06:47 PM</p>
            </div>
          </div>
          <h3>{aboutFlight.exitDate}</h3>
        </article>
      </div>
      <div className='flightCost'>
        <div className='titleCost'>
        <h3>Costos de vuelo</h3>
        </div>
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
    </ReservationInfo>
  )
}

export default YourReservation
