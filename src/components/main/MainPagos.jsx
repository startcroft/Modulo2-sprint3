import React from 'react'
import { pagosTarjetas, pagosEfectivo, serviciosDisponibles } from '../../data/data';
import { StylesMainPagos, InfoPagos, CompaniesTarjetas, Divservicios } from './StylesMainPagos';


const MainPagos = () => {
    return (
        <StylesMainPagos>
            <div>
                <h2>Pago seguro</h2>
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
            </div>

            <Divservicios>
                <h2>Servicios disponibles</h2>
                <div >
                    {
                        serviciosDisponibles.map((servicio) => (
                            <article>
                                
                                    <servicio.image className='icon' style={{
                                        color: "white",
                                        backgroundColor: "9e247b",
                                        fontSize: "40px",
                                        padding: "20px",
                                        borderRadius: "50%"
                                        
                                    }} />
                               
                                <h4>
                                    {servicio.servicio}
                                </h4>
                                <p>
                                    {servicio.info}
                                </p>
                            </article>
                        ))
                    }
                </div>
            </Divservicios  >
        </StylesMainPagos>
    )
}

export default MainPagos;