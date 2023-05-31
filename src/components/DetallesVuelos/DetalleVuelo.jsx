import React, { useContext, useEffect } from 'react'
import DetalleVueloSalida from './DetalleVueloSalida/DetalleVueloSalida'
import DetalleVueloRegreso from './DetalleVueloRegreso/DetalleVueloRegreso'
import YourReservation from './yourReservation/YourReservation'
import { FlightContextUno } from '../context/FlightContextUno'
import SeleccionarAsiento from './SelecAsiento/SeleccionarAsiento'

const DetalleVuelo = () => {
  const {
    aboutFlight,
    storageCity,
    storageDestiny,
    simpleTravel,
    handleAboutFlight,
    handleStorageCity,
    handleStorageDestiny } = useContext(FlightContextUno);

  useEffect(() => {

    getFromStorage();


  }, []);

  const getFromStorage = () => {

    const params = sessionStorage.getItem("FlightContextUno") ? JSON.parse(sessionStorage.getItem("FlightContextUno")) : {};
    const city = sessionStorage.getItem("city") ? JSON.parse(sessionStorage.getItem("city")) : {};
    const destiny = sessionStorage.getItem("destiny") ? JSON.parse(sessionStorage.getItem("destiny")) : {};
    handleAboutFlight(params);
    handleStorageCity(city);
    handleStorageDestiny(destiny);

  }
  return (
    <>
      <div style={{ background: "#f0f1e9", display: "flex", width: "100%" }}>
        <div style={{  width: "65%" }}>
          <DetalleVueloSalida />
          {!simpleTravel && <DetalleVueloRegreso />}
        </div>
        <div>
          <YourReservation />
          <SeleccionarAsiento text='Seleccionar Asiento' ruta='/asientos'/>
        </div>



      </div>

    </>
  )
}

export default DetalleVuelo