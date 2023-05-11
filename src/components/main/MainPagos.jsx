import React from 'react'
import { pagosTarjetas, pagosEfectivo } from '../../data/data';
import { StylesMainPagos, InfoPagos, CompaniesTarjetas, CompanyEfectivo } from './StylesMainPagos';
const MainPagos = () => {
    return (
        <StylesMainPagos>
            <h1>Pago seguro</h1>
            <InfoPagos>
                <CompaniesTarjetas>
                    <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
                    <div>
                        {
                            pagosTarjetas.map((tarjeta) => (
                            <figure>
                                <img src={tarjeta.image} alt={tarjeta.title} />
                            </figure>))
                        }
                    </div>
                </CompaniesTarjetas>
                <CompaniesTarjetas>
                    <p>Efectivo en cualquiera de las sucursales principales</p>
                    <div>
                        {
                            pagosEfectivo.map((tienda) => (
                                <figure>
                                    <img src={tienda.image} alt={tienda.name} />
                                </figure>
                            ))
                        }
                    </div>
                </CompaniesTarjetas>
            </InfoPagos>
            <div>

            </div>
        </StylesMainPagos>
    )
}

export default MainPagos