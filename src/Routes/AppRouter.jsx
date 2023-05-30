
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import DetalleVuelo from '../components/DetallesVuelos/DetalleVuelo'
import BuscarVuelo from '../components/header/BtnBuscarVuelo/BuscarVuelo'
import Asientos from '../components/Asientos/Asientos'
import FlightProvider, { FlightContextUno } from '../components/context/FlightContextUno'
import { useContext } from 'react'
import NotFound from '../components/NotFound/NotFound'

const AppRouter = () => {


  return (
    <div>

      <BrowserRouter>
        <FlightProvider>
          <Routes>

            <Route path='/' index element={<Layout />} />
            <Route path='detallevuelo' element={<DetalleVuelo />} />
            <Route path='asientos' element={<Asientos/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </FlightProvider>
      </BrowserRouter>

        
    </div>
  )
}

export default AppRouter