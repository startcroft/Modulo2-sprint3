import React from "react";
import plane from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg";
import { StyledButton } from "./StylesBuscarVuelo";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
  return (
    
    <Link onClick={handleClick} style={{ width: '100%', textDecoration: 'none' }} to={validarCampos() ? 'detallevuelo' : ''} >
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
