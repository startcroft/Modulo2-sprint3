import React from "react";
import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg"
import calendar from "../../00 RECURSOS PROYECTO SPRINT 2/icons/calendar.svg"
import plane from "../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg"
import chevronDown from "../../00 RECURSOS PROYECTO SPRINT 2/icons/chevron-down.svg"
import { StyleSection } from "./StyleHeader";
import Modal from "../header/passengersModal/PassengersModal";
import { useModal } from "./useModal";




const Header = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(true);

    return (
        < >
            <StyleSection>
                <figure>
                    <img className="airplane" src={airplane} alt="airplane" />
                </figure>


                <form >
                    <h1>Busca un nuevo destino y comienza la aventura</h1>

                    <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
                    <div>
                        <button className="travelTypeOne">
                            Viaje redondo
                        </button>
                        <button className="travelTypeTwo">
                            Viaje sencillo
                        </button>
                    </div>
                    <div>
                        <button className="destinyButton">
                            <h2>Ciudad de México</h2>
                            <h3>Origen</h3>
                        </button>

                        <button className="destinyButton">
                            <h2>---</h2>
                            <h3>Seleccione un destino</h3>
                        </button>
                    </div>
                    <div>

                        <button>
                            <img src={calendar} alt="calendar" />
                            <div>
                                <h3>Salida</h3>
                                <h3>Mar, 30 nov, 2021</h3>
                            </div>
                        </button>

                        <button>
                            <img src={calendar} alt="calendar" />
                            <div>
                                <h3>Regreso</h3>
                                <h3>Mié, 8 dic, 2021</h3>
                            </div>
                        </button>
                    </div>

                    <div>
                        <button className="passengers" onClick={openModal1}>

                            <div>
                            <h3>Pasajeros</h3>
                            <h3>1 adulto</h3>
                            </div>
                            <img src={chevronDown} alt="chevronDown" />
                           
                        </button>
                        <Modal  isOpen={isOpenModal1} closeModal={closeModal1}></Modal>

                    </div>

                    

                    <button className="submitButton">
                        <img src={plane} alt="plane" />
                        <h3>Buscar vuelos</h3>
                    </button>

                </form>

            </StyleSection>
        </>
    )
}

export default Header;