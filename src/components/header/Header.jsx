import React, { useEffect, useState } from "react";
import airplane from "../../00 RECURSOS PROYECTO SPRINT 2/avion.jpg";
import calendar from "../../00 RECURSOS PROYECTO SPRINT 2/icons/calendar.svg";
import chevronDown from "../../00 RECURSOS PROYECTO SPRINT 2/icons/chevron-down.svg";
import { StyleSection } from "./StyleHeader";
import { DatePicker, Input } from "antd";
import { getCiudades } from "../services/getCiudades";
import { Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import plus from "../../00 RECURSOS PROYECTO SPRINT 2/icons/plus.svg"
import minus from "../../00 RECURSOS PROYECTO SPRINT 2/icons/minus.svg"
import BuscarVuelo from "./BtnBuscarVuelo/BuscarVuelo";

const Header = () => {

  const [showCalendar, setShowCalendar] = useState({
    salida: false,
    regreso: false
  });
  const [isSelected, setIsSelected] = useState('button1');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedDestiny, setSelectedDestiny] = useState({});

  const [isOpenModal1, setIsModalOpen1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [passengersAmount, setPassengersAmount] = useState(0);
  const [adultAmount, setAdultAmount] = useState(0);
  const [childAmount, setChildAmount] = useState(0);
  const [babyAmount, setBabyAmount] = useState(0);

  const validarCampos = () => {
    const validacionCalenadrioRegreso = (isSelected === 'button2' ? showCalendar.regreso : !showCalendar.regreso)
    if (!selectedCity || !selectedDestiny || !showCalendar.salida || validacionCalenadrioRegreso || !passengersAmount) {
      return false;
    } else {
      return true;
    }
  }

  const incrementPassengers = () => {
    setPassengersAmount(
      prevAmount => prevAmount + 1
    )
  }

  const decrementPassengers = () => {
    if (passengersAmount === 0) {
      alert("No se pueden ingresar valores negativos");
    } else {
      setPassengersAmount(
        prevAmount => prevAmount - 1
      )
    }

  }

  const incrementAdultAmount = () => {
    setAdultAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementAdultAmount = () => {

    if (adultAmount === 0) {
      alert("No se pueden ingresar valores negativos");
    } else {
      setAdultAmount(
        prevAmount => prevAmount - 1
      )
      decrementPassengers()
    }

  }

  const incrementBabyAmount = () => {
    setBabyAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementBabyAmount = () => {

    if (babyAmount === 0) {
      alert("No se pueden ingresar valores negativos");
    } else {
      setBabyAmount(
        prevAmount => prevAmount - 1

      )
      decrementPassengers()
    }

  }

  const incrementChildAmount = () => {
    setChildAmount(
      prevAmount => prevAmount + 1

    )
    incrementPassengers()
  }

  const decrementChildAmount = () => {

    if (childAmount === 0) {
      alert("No se pueden ingresar valores negativos");
    } else {
      setChildAmount(
        prevAmount => prevAmount - 1
      )
      decrementPassengers()
    }



  }

  const showModal = () => {
    setIsModalOpen(true);
    setIsModalOpen2(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  }

  const showModal2 = () => {
    setIsModalOpen2(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
    setIsModalOpen2(false);
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

  const customStyles = {
    display: 'flex',
    flexDirection: 'column'
  };

  const countButton = {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'

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
          <Button type="input" onClick={showModal} className="destinyButton" >

            <h2>
              {selectedCity.name ? selectedCity.name : "Ciudad de México"}
            </h2>
            <span>Origen</span>
            {
              selectedCity.name == null && <div style={
                {
                  color: '#f05b5b'
                }
              }>Complete este campo</div>
            }
          </Button>

          <Modal
            style={{ width: "100px" }}
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
                      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 style={{ margin: "2%" }}>{item.name}</h3>
                        <p style={{ margin: 0, padding: 0 }}>{item.aeropuerto}</p>
                      </div>
                    </button>
                  </th>
                </tr>
              </table>
            ))}
          </Modal>

          <Button type="" onClick={showModal2} className="destinyButton" >
            <h2>{selectedDestiny.name ? selectedDestiny.name : "---"}</h2>
            <span>Seleccione un destino</span>
            {
              selectedDestiny.name == null && <div style={
                {
                  color: '#f05b5b'
                }
              }>Complete este campo</div>
            }
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
                      onClick={() => {
                        console.log(item);
                        setSelectedDestiny(item);
                        setIsModalOpen2(false);
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
                      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 style={{ margin: "2%" }}>{item.name}</h3>
                        <p style={{ margin: 0, padding: 0 }}>{item.aeropuerto}</p>
                      </div>

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
              <h4> {showCalendar.salida ? !showCalendar.salida : 'Mar, 30 nov, 2023'}</h4>
              {showCalendar.salida && (
                <div>
                  <DatePicker format='ddd, D MMM, YYYY' renderExtraFooter={() => "$ Precios mas bajos"} />

                </div>
              )}
              {
                !showCalendar.salida && <div style={
                  {
                    color: '#f05b5b',
                    width: '100%'
                  }
                }>Seleccione una fecha</div>
              }
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
              <h4>  {showCalendar.regreso ? !showCalendar.regreso : 'Mié, 8 dic, 2021'}</h4>
              {showCalendar.regreso && (
                <div>
                  <DatePicker format='ddd, D MMM, YYYY' renderExtraFooter={() => "$ Precios mas bajos"} />
                </div>
              )}
              {
                !showCalendar.regreso && <div style={
                  {
                    color: '#f05b5b',
                    width: '100%'
                  }
                }>Seleccione una fecha</div>
              }
            </div>
          </button>
        </div>

        <div className="pasajeros">
          <button className="passengers" onClick={showModal1}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <div>
                <span>Pasajeros</span>
                <h4> {passengersAmount} pasajeros</h4>
              </div>
              <img src={chevronDown} alt="chevronDown" />
            </div>
            {
              passengersAmount === 0 && <div style={
                {
                  color: '#f05b5b'
                }
              }>Complete este campo</div>
            }
          </button>


          <Modal
            className="modal-container"
            style={customStyles}
            open={isOpenModal1}
            onOk={handleCancel}
            onCancel={handleCancel}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: 'center' }}>
              <div className="passengerType">
                <h2>Adultos</h2>
                <h4>(13 + años)</h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", border: '1px solid gray', padding: '0px', height: '2.51rem', gap: '7px', borderRadius: '15px' }}>
                <button className="contadorBotones" style={countButton} onClick={decrementAdultAmount}>
                  <img src={minus} alt="plus" />
                </button>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <h2 style={{ margin: "15px" }}>{adultAmount}</h2>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <button className="contadorBotones" style={countButton} onClick={incrementAdultAmount}>
                  <img src={plus} alt="minus" />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: 'center' }}>
              <div className="passengerType">
                <h2>Niños</h2>
                <h4>(2 a 12 años)</h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", border: '1px solid gray', padding: '0px', height: '2.51rem', gap: '7px', borderRadius: '15px' }}>
                <button className="contadorBotones" style={countButton} onClick={decrementChildAmount}>
                  <img src={minus} alt="plus" />
                </button>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <h2 style={{ margin: "15px" }}>{childAmount}</h2>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <button className="contadorBotones" style={countButton} onClick={incrementChildAmount}>
                  <img src={plus} alt="minus" />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: 'center' }}>
              <div className="passengerType">
                <h2>Bebés</h2>
                <h4>(0 a 23 años)</h4>
              </div>

              <div style={{ display: "flex", alignItems: "center", border: '1px solid gray', padding: '0px', height: '2.51rem', gap: '7px', borderRadius: '15px' }}>
                <button className="contadorBotones" style={countButton} onClick={decrementBabyAmount}>
                  <img src={minus} alt="plus" />
                </button>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <h2 style={{ margin: "15px" }}>{babyAmount}</h2>
                <p style={{ fontSize: '25px', fontWeight: 'lighter' }}>|</p>
                <button className="contadorBotones" style={countButton} onClick={incrementBabyAmount}>
                  <img src={plus} alt="minus" />
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
        <BuscarVuelo validarCampos={validarCampos} />
      </form>
    </StyleSection>
  );
};

export default Header;
