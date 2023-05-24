import React from 'react'
import { StylesAsientos } from './StylesAsientos';

const Asientos = () => {
  const botonesSalidaRapidaIzquierda = [];
  const botonesSalidaRapidaDerecha = [];
  const botonesEstandarIzquierda = [];
  const botonesEstandarDerecha = [];

  for (let i = 1; i <= 15; i++) {
    botonesSalidaRapidaIzquierda.push(<button key={i} style={{ padding: '25px', margin: '8px', borderColor:'#ececec', background:'#bababa', borderRadius:'5px' }}></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesSalidaRapidaDerecha.push(<button key={i} style={{ padding: '25px', margin: '8px', borderColor:'#ececec', background:'#bababa', borderRadius:'5px' }}></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesEstandarIzquierda.push(<button key={i} style={{ padding: '25px', margin: '8px', borderColor:'#ececec', background:'#bababa', borderRadius:'5px' }}></button>);
  }
  for (let i = 1; i <= 15; i++) {
    botonesEstandarDerecha.push(<button key={i} style={{ padding: '25px', margin: '8px', borderColor:'#ececec', background:'#bababa', borderRadius:'5px' }}></button>);
  }

  return (
    <StylesAsientos >
      <h3>Seleccione sus asientos</h3>
      <div style={{ width: '47%' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <div style={{display:'flex', gap:'20px', padding:0, margin:0}}>
            <button className='botonesGuia'>A</button>
            <button className='botonesGuia'>B</button>
            <button className='botonesGuia'>C</button>
          </div>
          <div style={{display:'flex', gap:'20px'}}>
            <button className='botonesGuia'>D</button>
            <button className='botonesGuia'>E</button>
            <button className='botonesGuia'>F</button>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Salida Rápida</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between'}}>
          <div style={{ width: "30%" }}>
            {botonesSalidaRapidaIzquierda}
          </div>
          <div style={{display:'flex', flexDirection: 'column',flexWrap: 'wrap' ,justifyContent: 'space-between' }}>
            <button className='botonesGuia'>1</button>
            <button className='botonesGuia'>2</button>
            <button className='botonesGuia'>3</button>
            <button className='botonesGuia'>4</button>
            <button className='botonesGuia'>5</button>
          </div>
          <div style={{ width: "30%"}}>
            {botonesSalidaRapidaDerecha}
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'center' }}>
          <h3>Estándar</h3>
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: 'space-between'}}>
          <div style={{ width: "30%" }}>
            {botonesEstandarIzquierda}
          </div>
          <div style={{display:'flex', flexDirection: 'column',flexWrap: 'wrap' ,justifyContent: 'space-between' }}>
            <button className='botonesGuia'>6</button>
            <button className='botonesGuia'>7</button>
            <button className='botonesGuia'>8</button>
            <button className='botonesGuia'>9</button>
            <button className='botonesGuia'>10</button>
          </div>
          <div style={{ width: "30%"}}>
            {botonesEstandarDerecha}
          </div>
        </div>
      </div>
    </StylesAsientos>
  )
}

export default Asientos