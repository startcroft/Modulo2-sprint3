import React, { useContext } from "react";
import plane from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg";
import { StyledButton } from "./StylesBuscarVuelo";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FlightContextUno } from "../../context/FlightContextUno";

const BuscarVuelo = ({ validarCampos }) => {
  const handleClick = () => {
    const camposValidos = validarCampos();

    if (camposValidos) {
        Swal.fire(
        'Good job!',
        'Campos Completos!',
        'success'
      )
    } else {
      Swal.fire(
        'Oops!',
        'Complete todos los campos!',
        'error'
      )
    }
  }

  const {passengersAmount, 
    adultAmount, 
    childAmount, 
    babyAmount,
    exitDate,
    returnDate,
    selectedCity,
    selectedDestiny,
    simpleTravel
  } = useContext(FlightContextUno);

  const saveInformation = () => {
    const flightInformation = {
      adultAmount, 
      childAmount, 
      babyAmount,
      exitDate,
      returnDate,
      simpleTravel,
    }

    
    sessionStorage.setItem("FlightContextUno", JSON.stringify(flightInformation));
    sessionStorage.setItem("city", JSON.stringify(selectedCity));
    sessionStorage.setItem("destiny", JSON.stringify(selectedDestiny));
  }
  return (
    
    <Link onClick={ () => {handleClick(); saveInformation()}} style={{ width: '100%', textDecoration: 'none' }} to={validarCampos() ? 'detallevuelo' : ''} >
      <StyledButton >
        <button className="submitButton">
          <img src={plane} alt="plane" />
          <h3>Buscar vuelos</h3>
        </button>
      </StyledButton>
    </Link>
  );
};

export default BuscarVuelo;
