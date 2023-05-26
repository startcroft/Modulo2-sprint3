import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import DetalleVuelo from '../components/DetallesVuelos/DetalleVuelo'
import BuscarVuelo from '../components/header/BtnBuscarVuelo/BuscarVuelo'
import NotFound from '../components/NotFound/NotFound'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Layout/>} /> 
                <Route path='detallevuelo' element={<DetalleVuelo/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter