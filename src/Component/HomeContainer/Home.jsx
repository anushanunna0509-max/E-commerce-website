import React, { useEffect, useState } from 'react'
import HomeContainerCard from './HomeContainerCard'
import axios from "axios"

import { useOutletContext } from 'react-router-dom'
import Footer from '../../Componnets/Footer/Footer'
import Contact from '../../Componnets/Footer/Contact'
import Hero from './Herocomp/Hero'
const Home = () => {

  let [data,setData] = useState([])
  let[products,setproducts]=useState([])
  let{search}=useOutletContext()
  let[isloading,setIsloading]=useState(false)

  // handling fetch datac
   console.log("sitting home"  +search)

  async function fetchingData(){
    // let res = await fetch("https://fakestoreapi.com/products")
    // let finaldata = await res.json()
    // setData(finaldata)

    setTimeout(async(timeout)=>{
let data = await axios.get("https://fakestoreapi.com/products")
    setData(data.data)
    setproducts(data.data)
    setIsloading(true)
    },2000)
    
  }

  useEffect(()=>{
    fetchingData()
  },[])


   //& handling products

  function handleAll() {
    setData(products)
  }
  function handleMen() {
    let filter = products.filter((items) => {
      return items.category === "men's clothing"
    })
    setData(filter)
  }

  function handleWomen() {
    let filter = products.filter((items) => {
      return items.category === "women's clothing"
    })
    setData(filter)
  }

  function handleJewellery() {
    let filter = products.filter((items) => {
      return items.category === "jewelery"
    })
    setData(filter)
  }

  function handleElectronics() {
    let filter = products.filter((items) => {
      return items.category === "electronics"
    })
    setData(filter)
  }

  // handling search data
  let handlesearch=data.filter((items)=>{
    return items.category.toLowerCase().includes(search.toLowerCase())
  })
  // console.log(handlesearch)

  let displaydata=handlesearch.length>0 ? handlesearch : data
  // console.log(displaydata)

  if(!isloading){
    return(
     <div className="w-full min-h-screen bg-gray-400 flex justify-center items-center ">
           <span className="loader">Loading</span>
      </div>
    )
  }

  return (
    <>
    <Hero/>
       <div className='w-full flex justify-end gap-4 px-10 bg-gray-400 py-3'>
      <button onClick={handleAll} className='px-4 py-1 text-white-500 border border-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-200 '>All</button>
      <button onClick={handleMen} className='px-4 py-1 text-white-500 border border-blue-700 rounded-lg text-sm font-semibold hover:bg-yellow-100'>Men</button>
      <button onClick={handleWomen} className='px-4 py-1 text-white-500 border border-blue-700 rounded-lg text-sm font-semibold hover:bg-pink-200'>Women</button>
      <button onClick={handleJewellery} className='px-4 py-1 text-white-500 border border-blue-700 rounded-lg text-sm font-semibold hover:bg-slate-200'>Jewellery</button>
      <button onClick={handleElectronics} className='px-4 py-1 text-white-500 border border-blue-700 rounded-lg text-sm font-semibold hover:bg-red-200'>Electronics</button>
    </div>  
   
    <div className='w-full bg-gray-400 flex flex-wrap gap-10 items-center justify-center pt-16'>
      {displaydata.map((items)=>(
        <HomeContainerCard
        key={items.id}
        imgUrl={items.image}
          title={items.title}
          description={items.description}
          price={items.price}
          id={items.id}/>
      ))}
      <Contact/>
     <Footer/>
    </div>
    </>
  )
}
export default Home