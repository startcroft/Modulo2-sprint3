import React, { useEffect, useState } from "react";
import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg";
import calendar from "../../00 RECURSOS PROYECTO SPRINT 2/icons/calendar.svg";
import chevronDown from "../../00 RECURSOS PROYECTO SPRINT 2/icons/chevron-down.svg";
import { StyleSection } from "./StyleHeader";
// import Modal from "../header/passengersModal/PassengersModal";
import { DatePicker, Input } from "antd";
import { getCiudades } from "../services/getCiudades";
import { Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import plus from "../../00 RECURSOS PROYECTO SPRINT 2/icons/plus.svg"
import minus from "../../00 RECURSOS PROYECTO SPRINT 2/icons/minus.svg"
// import { clear } from "@testing-library/user-event/dist/clear";
// import { red } from "@mui/material/colors";
import BuscarVuelo from "./BtnBuscarVuelo/BuscarVuelo";


const Header = () => {

  const [showCalendar, setShowCalendar] = useState({
    salida: false,
    regreso: false
  });
  const [isSelected, setIsSelected] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});

  const [isOpenModal1, setIsModalOpen1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [passengersAmount, setPassengersAmount] = useState(1);
  const [adultAmount, setAdultAmount] = useState(0);
  const [childAmount, setChildAmount] = useState(0);
  const [babyAmount, setBabyAmount] = useState(0);

  const incrementPassengers = () => {
    setPassengersAmount(
      prevAmount => prevAmount + 1
    )
  }

  const decrementPassengers = () => {
    setPassengersAmount(
      prevAmount => prevAmount - 1
    )
  }

  const incrementAdultAmount = () => {
    setAdultAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementAdultAmount = () => {
    setAdultAmount(
      prevAmount => prevAmount - 1

    )
    decrementPassengers()
  }

  const incrementBabyAmount = () => {
    setBabyAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementBabyAmount = () => {
    setBabyAmount(
      prevAmount => prevAmount - 1

    )
    decrementPassengers()
  }

  const incrementChildAmount = () => {
    setChildAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementChildAmount = () => {
    setChildAmount(
      prevAmount => prevAmount - 1

    )
    decrementPassengers()
  }




  const showModal = () => {
    setIsModalOpen(true);
    setIsModalOpen2(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
    // const buttonId = Number( e.target.id);
    // console.log('se dio click a', buttonId );
    // const city = cities.find((city) => city.id === buttonId);
    // console.log(city);
    // setSelectedCity(city);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
  };



  useEffect(() => {
    getCiudades('ciudades')
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

  const customStyles = {
    display: 'flex',
    flexDirection: 'column'
    };

  const countButton = {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }



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

            <h2>
              {selectedCity.name ? selectedCity.name : "Ciudad de México"}
            </h2>
            <span>Origen</span>
          </Button>
          <Modal

            title="¿A donde viajas?"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              addonBefore={<SearchOutlined style={{ background: "#fff" }} />}
              placeholder="Medellin"
            />
            {cities.map((item, index) => (
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tr>
                  <th style={{ border: "1px solid grey", padding: "8px" }}>
                    <button
                      id={item.id}
                      onClick={() => {
                        console.log(item);
                        setSelectedCity(item);
                        setIsModalOpen(false);
                      }}
                      style={{
                        width: "100%",
                        display: "flex",
                        border: 0,
                        background: "transparent",
                        justifyContent: "flex-start",
                        margin: 0,
                        cursor: "pointer",
                      }}
                    >
                      <h3 style={{ margin: "2%" }}>{item.name}</h3>
                    </button>
                  </th>
                </tr>
              </table>
            ))}
          </Modal>

          <Button type="" onClick={showModal} className="destinyButton">
            <h2>---</h2>
            <span>Seleccione un destino</span>
          </Button>
          <Modal
            style={{ width: "100px" }}
            title="¿A donde viajas?"
            open={isModalOpen2}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              addonBefore={<SearchOutlined style={{ background: "#fff" }} />}
              placeholder="Medellin"
            />
            {cities.map((item, index) => (
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tr>
                  <th style={{ border: "1px solid grey", padding: "8px" }}>
                    <button
                      id={item.id}
                      Click={handleOk}
                      style={{
                        width: "100%",
                        display: "flex",
                        border: 0,
                        background: "transparent",
                        justifyContent: "flex-start",
                        margin: 0,
                        cursor: "pointer",
                      }}
                    >
                      <h3 style={{ margin: "2%" }}>{item.name}</h3>
                    </button>
                  </th>
                </tr>
              </table>
            ))}
          </Modal>
        </div>
        <div className="calendarios">
          <button
            className="calendar"
            onClick={() => {
              setShowCalendar({
                ...showCalendar,
                salida: true,
              });
            }}
          >
            <img src={calendar} alt="calendar" />
            <div>
              <span>Salida</span>
              <h4>Mar, 30 nov, 2021</h4>
              {showCalendar.salida && (
                <div>
                  <DatePicker renderExtraFooter={() => "$ Precios mas bajos"} />
                </div>
              )}
            </div>
          </button>

          <button
            className="calendar"
            onClick={() => {
              setShowCalendar({
                ...showCalendar,
                regreso: true,
              });
            }}
            disabled={isSelected === "button2"}
          >
            <img src={calendar} alt="calendar" />
            <div>
              <span>Regreso</span>
              <h4>Mié, 8 dic, 2021</h4>
              {showCalendar.regreso && (
                <div>
                  <DatePicker renderExtraFooter={() => "$ Precios mas bajos"} />
                </div>
              )}
            </div>
          </button>
        </div>

        <div className="pasajeros">
          <button className="passengers" onClick={showModal1}>
            <div>
              <span>Pasajeros</span>
              <h4> {passengersAmount} pasajeros</h4>
            </div>
            <img src={chevronDown} alt="chevronDown" />
          </button>
          {/* // Aquí está el nuevo modal */}
          <Modal
            className="modal-container"
            style={customStyles}
            open={isOpenModal1}
            onOk={handleCancel}
            onCancel={handleCancel}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="passengerType">
                <h2>Adultos</h2>
                <h3>(13 + años)</h3>
              </div>

              <div style={{ display: "flex", alignSelf: "center" }}>
                <button style={countButton} onClick={incrementAdultAmount}>
                  <img src={plus} alt="plus" />
                </button>
                <h2 style={{ margin: "15px" }}>{adultAmount}</h2>
                <button style={countButton} onClick={decrementAdultAmount}>
                  <img src={minus} alt="minus" />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="passengerType">
                <h2>Niños</h2>
                <h3>(2 a 12 años)</h3>
              </div>

              <div style={{ display: "flex", alignSelf: "center" }}>
                <button style={countButton} onClick={incrementChildAmount}>
                  <img src={plus} alt="plus" />
                </button>
                <h2 style={{ margin: "15px" }}>{childAmount}</h2>
                <button style={countButton} onClick={decrementChildAmount}>
                  <img src={minus} alt="minus" />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="passengerType">
                <h2>Bebés</h2>
                <h3>(0 a 2 años)</h3>
              </div>

              <div style={{ display: "flex", alignSelf: "center" }}>
                <button style={countButton} onClick={incrementBabyAmount}>
                  <img src={plus} alt="plus" />
                </button>
                <h2 style={{ margin: "15px" }}>{babyAmount}</h2>
                <button style={countButton} onClick={decrementBabyAmount}>
                  <img src={minus} alt="minus" />
                </button>
              </div>
            </div>
          </Modal>
          <button className="passengers">
            <div>
              <span>Tienes un código de promoción</span>
              <h4>-- -- -- --</h4>
            </div>
          </button>
        </div>

        {/* <button className="submitButton">
          <img src={plane} alt="plane" />
          <h3>Buscar vuelos</h3>
        </button> */}
        <BuscarVuelo />
      </form>
    </StyleSection>
  );
};

export default Header;
