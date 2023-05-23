import React from "react";
import plane from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg";
import { StyledButton } from "./StylesBuscarVuelo";
import { Link } from "react-router-dom";

const BuscarVuelo = () => {
  return (
    <StyledButton>
      <Link style={{width:'100%', textDecoration: 'none'}} to="detallevuelo">
        <button className="submitButton">
          <img src={plane} alt="plane" />
          <h3>Buscar vuelos</h3>
        </button>
      </Link>
    </StyledButton>
  );
};

export default BuscarVuelo;
