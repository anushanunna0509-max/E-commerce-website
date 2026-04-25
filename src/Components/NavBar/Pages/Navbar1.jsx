import React from 'react'
import { Link } from 'react-router-dom'


const Navbar1 = () => {
  return (
    <nav className='flex bg-green-500 text-white justify-between p-6 h-[75px] w-[100vw]  items-center'>
        
        <div className="flex items-center gap-3 font-thin" > 
            <h1 className="text-xl font-bold">Startup3</h1>
        </div>
          <div className='flex gap-[40px]'>
            <Link to="/">Home</Link>
            <Link to="/Feature">Feature</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='/Shop'>Shop</Link> 
            <img
              src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
              alt="logo"
              className="w-9 h-8 "
            />  
            </div>
            <Link to='/Signin'>Signin</Link>
            <div className="bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-500">
            <Link to='/SignUp'>Sign Up</Link>
            </div>       
    </nav>
  )
}
export default Navbar1