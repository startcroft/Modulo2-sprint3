import React from 'react'

const Asientos = () => {
    const botones = [];

  for (let i = 1; i <= 15; i++) {
    botones.push(<button key={i} style={{padding:'20px', }}></button>);
  }

  return (
    <div>
        <h3>Seleccione sus asientos</h3>
        <div>

        </div>
        <div style={{display:'flex', flexDirection:'row', gap: '10px', width:'5%'}}>
        {botones}
        </div>
        
    </div>
  )
}

export default Asientos