import React from 'react'
import { StyledSeleccionAsiento } from './StyledSeleccionAsiento'
import { Link } from 'react-router-dom'
const SeleccionarAsiento = ({text, ruta, image}) => {
    return (
        <StyledSeleccionAsiento>
            <Link style={{textDecoration:'none', width:'100%'}} to={ruta}>
                <button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img style={{width:'6%', marginRight: '3%'}} src={image} alt="" />
                   {text}
                </button>
            </Link>

        </StyledSeleccionAsiento>
    )
}

export default SeleccionarAsiento