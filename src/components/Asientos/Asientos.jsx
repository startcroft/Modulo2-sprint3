import React, { useEffect, useState } from 'react'
import { StylesAsientos } from './StylesAsientos';
import { getCiudades } from '../services/getCiudades';

const Asientos = () => {
  const [sillas, setSillas] = useState([]);
  const [isClicked, setIsClicked] = useState(false)

  const handleClickSilla = () => {
    setIsClicked(true);
  }
  useEffect(() => {
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

  const renderItems = (init, end) => {
    const elements = [];
    const firstSillas = sillas.slice(init, end);
    for (let i = 0; i < firstSillas.length; i++) {
      elements.push(<button
        style={{
          width: '50px',
          height: "50px",
          margin: '5px',
          background: firstSillas[i].disponible ? "#c2c2c2" : "#fff",
          border: !firstSillas[i].disponible ? "2px solid #9e247b" : "",
          cursor: 'pointer',
        }}
        disabled={firstSillas[i].disponible ? "disabled" : ''}
        key={i}
        className={isClicked ? 'clicked' : ''}
        onClick={handleClickSilla}

      >
        {firstSillas[i].id}
      </button>)
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
    </StylesAsientos>
  )
}

export default Asientos