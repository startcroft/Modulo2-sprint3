
import React from 'react'
import Header from '../header/Header'
import MainPagos from '../main/MainPagos'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>
        <MainPagos/>
        <Outlet/>
    </div>
  )
}

export default Layout