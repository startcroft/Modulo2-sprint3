import React, { useEffect, useState } from "react";
import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg";
import calendar from "../../00 RECURSOS PROYECTO SPRINT 2/icons/calendar.svg";
import plane from "../../00 RECURSOS PROYECTO SPRINT 2/icons/plane.svg";
import chevronDown from "../../00 RECURSOS PROYECTO SPRINT 2/icons/chevron-down.svg";
import { StyleSection } from "./StyleHeader";
// import Modal from "../header/passengersModal/PassengersModal";
import { useModal } from "./useModal";
import { DatePicker, Input } from "antd";
import { getCiudades } from "../services/getCiudades";
import { Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { clear } from "@testing-library/user-event/dist/clear";


const Header = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setIsModalOpen2(false);
  };
  const handleOk = (e) => {
    setIsModalOpen(false);
    const buttonId = Number( e.target.id);
    console.log('se dio click a', buttonId );
    const city = cities.find((city) => city.id === buttonId);
    console.log(city);
    setSelectedCity(city);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  useEffect(() => {
    getCiudades()
      .then((response) => {
        if (!cities.length) {
          setCities(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cities]);



  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setShowCalendar(true);
    console.log(showCalendar);
  };
  const handleClickBtnSelected = (button) => {
    setIsSelected(button);
    console.log(button);
  };

 
  return (
    <StyleSection>
      <figure className="airplane">
        <img src={airplane} alt="airplane" />
      </figure>

      <form onSubmit={handleSubmit}>
        <h1>Busca un nuevo destino y comienza la aventura</h1>

        <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje</p>
        <div className="tipoViaje">
          <button
            className={`travelType ${isSelected === "button1" ? "selected" : ""
              }`}
            onClick={() => handleClickBtnSelected("button1")}
          >
            Viaje redondo
          </button>
          <button
            className={`travelType ${isSelected === "button2" ? "selected" : ""
              }`}
            onClick={() => handleClickBtnSelected("button2")}
          >
            Viaje sencillo
          </button>
        </div>
        <div className="destinos">
          <Button type="" onClick={showModal} className="destinyButton">
            {/* {
              selectedCity.map(city => (
                <h2>
                  {city.name} 
                </h2>
              ))
            } */}
            <h2>Ciudad de mexico</h2>
            <span>Origen</span>
          </Button>
          <Modal style={{ width: '100px' }} title="¿A donde viajas?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Input addonBefore={<SearchOutlined style={{ background: '#fff' }} />} placeholder="Medellin" />
            {

              cities.map((item, index) => (
                <table style={{ borderCollapse: "collapse", width: '100%' }}>
                  <tr>
                    <th style={{ border: "1px solid grey", padding: "8px" }}>
                      <button id={item.id} onClick={handleOk} 
                        style={{
                          width: '100%',
                          display: 'flex',
                          border: 0,
                          background: "transparent",
                          justifyContent: "flex-start",
                          margin: 0,
                          cursor: 'pointer',
                        }}
                      >
                        <h3 style={{ margin: "2%" }}>{item.name}</h3>
                      </button>
                    </th>
                  </tr>
                </table>
              ))
            }
          </Modal>
          
          <Button type="" onClick={showModal} className="destinyButton">
            <h2>---</h2>
            <span>Seleccione un destino</span>
          </Button>
          <Modal style={{ width: '100px' }} title="¿A donde viajas?" open={isModalOpen2} onOk={handleOk} onCancel={handleCancel}>
            <Input addonBefore={<SearchOutlined style={{ background: '#fff' }} />} placeholder="Medellin" />
            {

              cities.map((item, index) => (
                <table style={{ borderCollapse: "collapse", width: '100%' }}>
                  <tr>
                    <th style={{ border: "1px solid grey", padding: "8px" }}>
                      <button onClick={handleOk}
                        style={{
                          width: '100%',
                          display: 'flex',
                          border: 0,
                          background: "transparent",
                          justifyContent: "flex-start",
                          margin: 0,
                          cursor: 'pointer',
                        }}
                      >
                        <h3 style={{ margin: "2%" }}>{item.name}</h3>
                      </button>
                    </th>
                  </tr>
                </table>
              ))
            }
          </Modal>

        </div>
        <div className="calendarios">
          <button className="calendar" onClick={handleClick}>
            <img src={calendar} alt="calendar" />
            <div>
              <span>Salida</span>
              <h4>Mar, 30 nov, 2021</h4>
              {showCalendar && (
                <div>
                  <DatePicker renderExtraFooter={() => "$ Precios mas bajos"} />
                </div>
              )}
            </div>
          </button>

          <button
            className="calendar"
            onClick={handleClick}
            disabled={isSelected === "button2"}
          >
            <img src={calendar} alt="calendar" />
            <div>
              <span>Regreso</span>
              <h4>Mié, 8 dic, 2021</h4>
              {showCalendar && (
                <div>
                  <DatePicker renderExtraFooter={() => "$ Precios mas bajos"} />
                </div>
              )}
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
  );
};

export default Header;
