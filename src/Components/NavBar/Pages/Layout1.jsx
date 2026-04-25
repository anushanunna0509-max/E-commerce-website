import React from 'react'

import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'

export const Layout1 = () => {
  return (
    <main>
       <Navbar1/>
       <Outlet/>
    </main>
  )
}
