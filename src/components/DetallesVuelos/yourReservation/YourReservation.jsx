import React, { useContext, useEffect } from 'react'
import { ReservationInfo } from './StyleYourReservation'
import { FlightContextUno } from '../../context/FlightContextUno';
import SeleccionarAsiento from '../SelecAsiento/SeleccionarAsiento';

const YourReservation = () => {

  const {
    aboutFlight,
    storageCity,
    storageDestiny,
    departureTime,
    departureLuggage,
    returnLuggage,
    tarifa,
    handleTarifa } = useContext(FlightContextUno);

    
  useEffect(() => {
 handleTarifa(((aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage) * 0.4) + ((aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage)))
      },[]);


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
              <p>{departureTime.salida}</p>
            </div>
            <p>___</p>
            <div>
              <h2>{storageDestiny.aeropuerto}</h2>
              <p>{departureTime.llegada}</p>
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
          <p>{(aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage)}</p>
        </article>
        <article>
          <p>Descuento promocional</p>
          <p>$0</p>
        </article>
        <article>
          <p>Tarifa base con descuento</p>
          <p>$0</p>
        </article>
        <article>
          <p>IVA tarifa</p>
          <p>$ {((aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage) * 0.4)}</p>
        </article>
        <article>
          <p>Total</p>
          <p>{((aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage) * 0.4) + ((aboutFlight.adultAmount + aboutFlight.childAmount) * (departureLuggage + returnLuggage))}</p>
        </article>
      </div>

    </ReservationInfo>

  )
}

export default YourReservation
