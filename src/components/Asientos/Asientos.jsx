import React from 'react'

const Asientos = () => {
    const botones = [];

  for (let i = 1; i <= 20; i++) {
    botones.push(<button key={i}>Botón {i}</button>);
  }

  return (
    <div>{botones}</div>
  )
}

export default Asientos