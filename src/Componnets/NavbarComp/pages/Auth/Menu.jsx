import React, { useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { authUser } from '../../../../Context/autheruserContext';
import { FaHeart } from 'react-icons/fa';
import CartContext from '../../../../Context/CartContext';
import toast from 'react-hot-toast';

 const Menu = ({ search, setsearch }) => {
  // console.log(search)
  const {userData,logout} = useContext(authUser)
  const{cart=[],wishlist=[]}=useContext(CartContext)
  const navigate=useNavigate()
  const handleProtectNav = (path) => {
    const user = localStorage.getItem("user")

    if (!user) {
      toast.error("Please login first")
      navigate("/login")
    } else {
      navigate(path)
    }
  }
   console.log(userData)

  function validUser() {
    return (
      <div className='flex items-center gap-4'>
    <button onClick={logout} className='cursor-pointer'>Logout</button>
    <section className='flex items-center gap-2 cursor-pointer'>
      <img
        className="w-8 h-8 rounded-full object-cover"
        src={userData?.photoURL}
        alt=""
      />
      <p>{userData?.displayName}</p>
    </section>
  </div>
      )
    }
    function invalidUser() {
      return (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-pink-400 border-b-2 border-blue-500' : ""
            }
            to="/login"
          >
            Login
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-400" : ""
            }
            to="/register"
          >
            Register
          </NavLink>
        </>
      )
    }

    return (
      <div className='flex justify-end gap-5'>

        {/* 🔍 Search */}
        <form className='relative'>
          <CiSearch className='absolute top-2 left-5' />
          <input
            type="text"
            placeholder='search'
            className='pl-[40px] py-1 bg-slate-300 rounded-[50px] outline-none'
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </form>

        {/* Home */}
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-cyan-400" : ""
        }>
          Home
        </NavLink>

        {/* 🛒 CART */}
        <div
          onClick={() => handleProtectNav("/cart")}
          className="relative cursor-pointer text-xl"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* ❤️ WISHLIST */}
        <div
          onClick={() => handleProtectNav("/Wishlist")}
          className="relative cursor-pointer text-xl"
        >
          <FaHeart color='red' />

          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {wishlist.length}
            </span>
          )}
        </div>

        {/* USER */}
        {userData?.emailVerified ? validUser() : invalidUser()}

      </div>
    )
  }

  export default Menu