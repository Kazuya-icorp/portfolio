import { Link } from "@remix-run/react";
import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  const isOpen = () => {
    setOpen(true)
  }
  const isClose = () => {
    setOpen(false)
  }
  
  const item = {
    exit1:{
      opacity:0,
      y:100,
      transition: {
        duration:.3,
      }
    }
  }
  const item2 = {
    exit2:{
      opacity:0,
      y:100,
      transition: {
        duration:.6,
      }
    }
  }
  const item3 = {
    exit3:{
      opacity:0,
      y:100,
      transition: {
        duration:1,
      }
    }
  }
  
  return (
    <>
    <div className="w-full items-center h-16 flex justify-between z-50">
      <div className='text-xl font-bold mx-8'>
       <h1>
        <Link to="/">
          !CorpW
        </Link>
       </h1>
      </div>
      <div>
      <div className='z-10 mx-12 md:hidden'>
        <button onClick={isOpen} className='p-2 flex justify-center items-center bg-gray-200 rounded-full'>
          <ion-icon name="rocket-outline"></ion-icon>
        </button>
      </div>
        <ul className=' hidden md:flex mx-12 gap-x-4'>
          <li>
            <Link to="/work">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <AnimatePresence>
    {
      open&&(
      <>
        <motion.div variants={item} initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:.8}} exit="exit1" className="nav w-full h-screen flex items-center text-white absolute z-40 top-0 right-0 bg-black overflow-hidden">
          <div className="w-full text-white flex justify-left items-center text-8xl ml-8 h-screen">
          <div className="flex flex-col">
            <Link to="/work">
              <span>W</span><span>O</span><span>R</span><span>K</span> 
            </Link>
            <Link to="/work">
              <span>A</span><span>B</span><span>O</span><span>U</span><span>T</span> 
            </Link>
            <Link to="/work">
              <span>W</span><span>O</span><span>R</span><span>K</span> 
            </Link>
            </div>
          </div>
          <div className='absolute top-4 right-14'>
          <button onClick={isClose} >
            <ion-icon name="planet-outline"></ion-icon>
          </button>
          </div>
        </motion.div>
        <motion.div variants={item2} initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:.5}} exit="exit2" className="nav w-full h-screen flex items-center text-white absolute z-30 top-0 right-0 bg-purple-500 overflow-hidden">
          <div className='absolute top-4 right-14'>
          <button onClick={isClose} >
            <ion-icon name="planet-outline"></ion-icon>
          </button>
          </div>
        </motion.div>
        <motion.div variants={item3} initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:.3}} exit="exit3" className="nav w-full h-screen flex items-center text-white absolute z-30 top-0 right-0 bg-indigo-400 overflow-hidden">
          <div className='absolute top-4 right-14'>
          <button onClick={isClose} >
            <ion-icon name="planet-outline"></ion-icon>
          </button>
          </div>
        </motion.div>
        </>
      )
    }
    </AnimatePresence>
    </>
    )
}