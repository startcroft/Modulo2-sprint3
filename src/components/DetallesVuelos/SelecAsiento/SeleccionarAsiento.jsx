import React from 'react'
import { StyledSeleccionAsiento } from './StyledSeleccionAsiento'
import { Link } from 'react-router-dom'
const SeleccionarAsiento = () => {
    return (
        <StyledSeleccionAsiento>
            <Link style={{textDecoration:'none', width:'100%'}} to='/asientos'>
                <button>
                    Seleccionar Asientos
                </button>
            </Link>

        </StyledSeleccionAsiento>
    )
}

export default SeleccionarAsiento