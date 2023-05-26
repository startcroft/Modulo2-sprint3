import React from 'react'
import { StylesAsientos } from './StylesAsientos';

const Asientos = () => {
  const botonesSalidaRapidaIzquierda = [];
  const botonesSalidaRapidaDerecha = [];
  const botonesEstandarIzquierda = [];
  const botonesEstandarDerecha = [];

  const handleClickAsientosSalidaRapidaIsquierda = (i) => {
    const key = (i)
    console.log('se dio click a', key);

  }
  const handleClickAsientosSalidaRapidaDerecha = (i) => {
    const key = i
    console.log('se dio click a', key);

  }
  const handleClickAsientosEstandarIzquierda = (i) => {
    const key = i
    console.log('se dio click a', key);
  }
  const handleClickAsientosEstandarDerecha = (i) => {
    const key = i
    console.log('se dio click a', key);
  }

  for (let i = 1; i <= 15; i++) {
    // const estadoAsiento ={
    //   id: i,
    //   disponible: false
    // }

    let disponible = false;
    if (i === 10 || i === 11) {
      disponible = true;
    }

    botonesSalidaRapidaIzquierda.push(<button
      key={i}
      onClick={() => handleClickAsientosSalidaRapidaIsquierda(`${i} Salida Rapida Izquierda`)}
      className='botonAsiento'
      style={{ background: disponible ? '#fff' : '#96969684',
               borderBlockColor: disponible ? '#9e247b' : '' }}
    ></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesSalidaRapidaDerecha.push(<button key={i} onClick={() => handleClickAsientosSalidaRapidaDerecha(`${i} Salida Rapida Derecha`)} className='botonAsiento' ></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesEstandarIzquierda.push(<button key={i} onClick={() => handleClickAsientosEstandarIzquierda(`${i} Estandar Izquierda`)} className='botonAsiento' ></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesEstandarDerecha.push(<button key={i} onClick={() => handleClickAsientosEstandarDerecha(`${i} Estandar Derecha`)} className='botonAsiento' ></button>);
  }




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
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between' }}>
          <div style={{ width: "100%" }}>
            {botonesSalidaRapidaIzquierda}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>1</button>
            <button className='botonesGuia'>2</button>
            <button className='botonesGuia'>3</button>
            <button className='botonesGuia'>4</button>
            <button className='botonesGuia'>5</button>
          </div>
          <div style={{ width: "100%" }}>
            {botonesSalidaRapidaDerecha}
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Estándar</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between' }}>
          <div style={{ width: "100%" }}>
            {botonesEstandarIzquierda}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <button className='botonesGuia'>6</button>
            <button className='botonesGuia'>7</button>
            <button className='botonesGuia'>8</button>
            <button className='botonesGuia'>9</button>
            <button className='botonesGuia'>10</button>
          </div>
          <div style={{ width: "100%" }}>
            {botonesEstandarDerecha}
          </div>
        </div>
      </div>
    </StylesAsientos>
  )
}

export default Asientos