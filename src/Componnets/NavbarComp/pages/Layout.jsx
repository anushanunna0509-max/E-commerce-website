import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '../../../Context/CartContext'

const Layout = () => {
  let [search,setsearch]=useState("")

  return (
    <CartProvider>
    <main className='w=[100vw] h-[100vh]'>
        <Navbar search={search} setsearch={setsearch}/>
        {/* to render childrens */}
        <Outlet context={{search}}/> 
        {/* used when we use single line of code */}
        {/* context used to rendiring the ui or react router-dom */}
        <Toaster/>     
    </main>
    </CartProvider>
  )
}
export default Layout

// contextApi used when we have multiple lines more than 50 lines