
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import DetalleVuelo from '../components/DetallesVuelos/DetalleVuelo'
import BuscarVuelo from '../components/header/BtnBuscarVuelo/BuscarVuelo'
import FlightProvider, { FlightContextUno } from '../components/context/FlightContextUno'
import { useContext } from 'react'

const AppRouter = () => {


  return (
    <div>

      <BrowserRouter>
        <FlightProvider>
          <Routes>

            <Route path='/' index element={<Layout />} />
            <Route path='detallevuelo' element={<DetalleVuelo />} />

          </Routes>
        </FlightProvider>
      </BrowserRouter>

    </div>
  )
}

export default AppRouter