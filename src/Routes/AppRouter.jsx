import React, { createContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import DetalleVuelo from '../components/DetallesVuelos/DetalleVuelo'
import BuscarVuelo from '../components/header/BtnBuscarVuelo/BuscarVuelo'

const AppRouter = () => {
  const flightDetails = createContext({});
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Layout/>} /> 
                <Route path='detallevuelo' element={<DetalleVuelo/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter