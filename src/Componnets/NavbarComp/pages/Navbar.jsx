import React from 'react'
import Menu from './Auth/Menu'
import Logo from './Auth/Logo'
// import {Link} from raect-router-dom

 const Navbar = ({search,setsearch}) => {
  return ( 
       <nav className="bg-cyan-200 shadow-md border-b">
      <div className="flex justify-between items-center px-8 py-4">
        <Logo />
        <Menu search={search} setsearch={setsearch} />
      </div>
    </nav>
  )
}
export default Navbar