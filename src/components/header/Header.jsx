import React from "react";
import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg"
import calendar from "../../00 RECURSOS PROYECTO SPRINT 2/icons/calendar.svg"
import plane from "../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg"
import chevronDown from "../../00 RECURSOS PROYECTO SPRINT 2/icons/chevron-down.svg"
import { StyleSection } from "./StyleHeader";
import Modal from "../header/passengersModal/PassengersModal";
import { useModal } from "./useModal";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;



const Header = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(true);

    return (

        <StyleSection>
            <figure className="airplane">
                <img  src={airplane} alt="airplane" />
            </figure>


            <form >
                <h1>Busca un nuevo destino y comienza la aventura</h1>

                <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
                <div className="tipoViaje">
                    <button className="travelType">
                        Viaje redondo
                    </button>
                    <button className="travelType">
                        Viaje sencillo
                    </button>
                </div>
                <div className="destinos">
                    <button className="destinyButton">
                        <h2>Ciudad de México</h2>
                        <span>Origen</span>
                    </button>

                    <button className="destinyButton">
                        <h2>---</h2>
                        <span>Seleccione un destino</span>
                    </button>
                </div>
                <div className="calendarios">

                    <button className="calendar">
                        <img src={calendar} alt="calendar" />
                        <div>
                            <span>Salida</span>
                            <h4>Mar, 30 nov, 2021</h4>
                            {/* <div>
                                <Space direction="vertical" size={12}>
                                    <DatePicker
                                        cellRender={(current) => {
                                            const style = {};
                                            if (current.date() === 1) {
                                                style.border = '1px solid #1890ff';
                                                style.borderRadius = '50%';
                                            }
                                            return (
                                                <div className="ant-picker-cell-inner" style={style}>
                                                    {current.date()}
                                                </div>
                                            );
                                        }}
                                    />
                                    <RangePicker
                                        cellRender={(current) => {
                                            const style = {};
                                            if (current.date() === 1) {
                                                style.border = '1px solid #1890ff';
                                                style.borderRadius = '50%';
                                            }
                                            return (
                                                <div className="ant-picker-cell-inner" style={style}>
                                                    {current.date()}
                                                </div>
                                            );
                                        }}
                                    />
                                </Space>
                            </div> */}
                        </div>
                    </button>

                    <button className="calendar">
                        <img src={calendar} alt="calendar" />
                        <div>
                            <span>Regreso</span>
                            <h4>Mié, 8 dic, 2021</h4>
                        </div>
                    </button>
                </div>

                <div className="pasajeros">
                    <button className="passengers" onClick={openModal1}>

                        <div>
                            <span>Pasajeros</span>
                            <h4>1 adulto</h4>
                        </div>
                        <img src={chevronDown} alt="chevronDown" />

                    </button>
                    <button className="passengers">

                        <div>
                            <span>Tienes un código de promoción</span>
                            <h4>-- -- -- --</h4>
                        </div>
                        

                    </button>
                    {/* <Modal  isOpen={isOpenModal1} closeModal={closeModal1}></Modal> */}

                </div>



                <button className="submitButton">
                    <img src={plane} alt="plane" />
                    <h3>Buscar vuelos</h3>
                </button>

            </form>

        </StyleSection>

    )
}

export default Header;