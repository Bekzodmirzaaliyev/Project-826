import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-[20px] py-5 text-[#AC3B61] font-medium text-[18px] bg-[#EDC7B7]">
        <Link to="/calendar"><p className='hover:scale-110 transition hover:text-[#c65379]'>Calendar</p></Link>
        <Link to="/calculator"><p className='hover:scale-110 transition hover:text-[#c65379]'>Calculator</p></Link>
        <Link to="/gallery"><p className='hover:scale-110 transition hover:text-[#c65379]'>Gallery</p></Link>
        <Link to="/currency"><p className='hover:scale-110 transition hover:text-[#c65379]'>Currency</p></Link>
        <Link to="/"><div className='w-[80px] h-[80px] rounded-full font-medium bg-[#227577] text-[#fff7f3] flex items-center justify-center text-center'>FRONT 826</div></Link>
        <Link to="/swiper"><p className='hover:scale-110 transition hover:text-[#c65379]'>Swiper</p></Link>
        <Link to="/todolist"><p className='hover:scale-110 transition hover:text-[#c65379]'>ToDolist</p></Link>
        <Link to="/weather"><p className='hover:scale-110 transition hover:text-[#c65379]'>Weather</p></Link>
        <Link to="/contacts"><p className='hover:scale-110 transition hover:text-[#c65379]'>Contacts</p></Link>
        </div>
    </div>
  )
}

export default Navbar