import React, { useEffect, useState } from 'react'
import { StylesAsientos } from './StylesAsientos';
import { getCiudades } from '../services/getCiudades';



const Asientos = () => {
  const [sillas, setSillas] = useState([]);
  const [usuarioAdulto, setUsuarioAdulto] = useState([]);
  const [usuarioNino, setUsuarioNino] = useState([]);
  const [usuarioBebe, setUsuarioBebe] = useState([]);
  const [simpleTravel, setSimpleTravel] = useState(false);


  const handleClickSilla = (id) => {
    const boton = sillas.find(silla => silla.id === id);
    
    if (boton && boton.disponible) {
      const numeroAsientosAdulto = usuarioAdulto + usuarioBebe + usuarioNino;
      const asientosSeleccionados = sillas.filter(silla => silla.seleccionado).length;
      if (asientosSeleccionados < numeroAsientosAdulto) {
        const sillasActualizadas = sillas.map(silla => {
          if (silla.id === id) {
            sessionStorage.setItem("asiento", JSON.stringify(silla.id));
            return { ...silla, seleccionado: true, color: '#9e247b' };
          }
          return silla;
        });

        setSillas(sillasActualizadas);
      }
    }
  };
  
  useEffect(() => {
    cantidadUsuarios();
    getCiudades('sillas')
      .then((response) => {
        if (!sillas.length) {
          setSillas(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sillas]);

  const cantidadUsuarios = () => {
    const numPasajeros = sessionStorage.getItem("FlightContextUno") ? JSON.parse(sessionStorage.getItem("FlightContextUno")) : {};
    const { adultAmount, babyAmount, childAmount, exitDate, returnDate, simpleTravel } = numPasajeros;
    setUsuarioAdulto(adultAmount)
    setUsuarioNino(childAmount)
    setUsuarioBebe(babyAmount)
    setSimpleTravel(simpleTravel);
  }


  const renderItems = (init, end) => {
    const elements = [];
    const firstSillas = sillas.slice(init, end);

    for (let i = 0; i < firstSillas.length; i++) {
      elements.push(<button
        style={{
          width: '50px',
          height: "50px",
          margin: '5px',
          
          background: firstSillas[i].disponible ? (firstSillas[i].seleccionado ? "#9e247b" : "#fff") : "#b9b9b9",
          border: firstSillas[i].disponible ? "2px solid #9e247b" : "none",
          cursor: firstSillas[i].disponible ? "pointer" : "not-allowed",
          borderRadius: '5px',
        }}
        disabled={!firstSillas[i].disponible}
        key={firstSillas[i].id}
        // className={firstSillas[i].seleccionado ? 'clicked' : ''}
        onClick={() => handleClickSilla(firstSillas[i].id)}
      >
        {/* {firstSillas[i].id} */}
      </button>
      )
    }
    return elements;
  };





  return (
    <StylesAsientos >
      <h3>Seleccione sus asientos</h3>
      <div style={{ width: '30rem', display: 'flex', flexDirection: "column", }}>
        <div style={{ display: 'flex', width: 'auto', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className='botonesGuia'>A</button>
            <button className='botonesGuia'>B</button>
            <button className='botonesGuia'>C</button>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className='botonesGuia'>D</button>
            <button className='botonesGuia'>E</button>
            <button className='botonesGuia'>F</button>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Salida rápida</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between', }}>
          <div style={{ width: "100%" }} className='prueba'>
            {
              renderItems(0, 15)
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>1</button>
            <button className='botonesGuia'>2</button>
            <button className='botonesGuia'>3</button>
            <button className='botonesGuia'>4</button>
            <button className='botonesGuia'>5</button>
          </div>
          <div style={{ width: "100%", marginLeft: '20px' }}>
            {
              renderItems(30, 45)
            }
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Estándar</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between', }}>
          <div style={{ width: "100%" }}>
            {renderItems(15, 30)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>6</button>
            <button className='botonesGuia'>7</button>
            <button className='botonesGuia'>8</button>
            <button className='botonesGuia'>9</button>
            <button className='botonesGuia'>10</button>
          </div>
          <div style={{ width: "100%", marginLeft: '20px' }}>
            {renderItems(45, 60)}
          </div>
        </div>
      </div>
      {
        !simpleTravel && <div>
          <h3>Seleccione sus asientos</h3>
      <div style={{ width: '30rem', display: 'flex', flexDirection: "column", }}>
        <div style={{ display: 'flex', width: 'auto', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className='botonesGuia'>A</button>
            <button className='botonesGuia'>B</button>
            <button className='botonesGuia'>C</button>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className='botonesGuia'>D</button>
            <button className='botonesGuia'>E</button>
            <button className='botonesGuia'>F</button>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Salida rápida</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between', }}>
          <div style={{ width: "100%" }} className='prueba'>
            {
              renderItems(0, 15)
            }
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>1</button>
            <button className='botonesGuia'>2</button>
            <button className='botonesGuia'>3</button>
            <button className='botonesGuia'>4</button>
            <button className='botonesGuia'>5</button>
          </div>
          <div style={{ width: "100%", marginLeft: '20px' }}>
            {
              renderItems(30, 45)
            }
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Estándar</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between', }}>
          <div style={{ width: "100%" }}>
            {renderItems(15, 30)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>6</button>
            <button className='botonesGuia'>7</button>
            <button className='botonesGuia'>8</button>
            <button className='botonesGuia'>9</button>
            <button className='botonesGuia'>10</button>
          </div>
          <div style={{ width: "100%", marginLeft: '20px' }}>
            {renderItems(45, 60)}
          </div>
        </div>
      </div>
        </div>
      }
    </StylesAsientos>
  )
}

export default Asientos