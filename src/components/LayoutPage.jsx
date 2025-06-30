import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

function LayoutPage() {
  return (
    <>
    <NavbarComp/>
    <Outlet/>
    <FooterComp/>
      
    </>
  )
}

export default LayoutPage
