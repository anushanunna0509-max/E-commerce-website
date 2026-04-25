import React from 'react'
import { Link } from 'react-router-dom'

export const HomeContainerCard = ({ imgUrl, title, description, price, id }) => {

  return (

    <div className='w-[310px] h-[380px] bg-radial-[at_25%_25%] from-white to-zinc-900 to-75 flex flex-col justify-center items-center rounded-md '>

      <img
        className='w-[55%] h-[60%]'
        src={imgUrl}
        alt="product"
      />

      <h1 className='font-semibold text-[20px] text-center tracking-tight'>
        {title?.slice(0, 20)}
      </h1>
      <p className='flex text-center'>
        Des:{description?.slice(0, 40)}
      </p>
      <div className='flex items-center gap-4 mt-2'>
        <p className='text-black-200 font-bold'>
          $ {price}
        </p>
        <Link to={"/product_Details/" + id}>
          <button className='px-4 py-[-5px] border-2 text-blue-500 mt-2 cursor-pointer rounded-md hover:border-white'>View Info</button>
        </Link>

      </div>

    </div>

  )
}
export default HomeContainerCard