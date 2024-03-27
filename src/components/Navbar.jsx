import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-[20px] py-5 text-[#AC3B61] font-medium text-[18px] bg-[#EDC7B7]">
        <Link to="/calendar"><p>Calendar</p></Link>
        <Link to="/calculator"><p>Calculator</p></Link>
        <Link to="/gallery"><p>Gallery</p></Link>
        <Link to="/currency"><p>Currency</p></Link>
        <Link to="/"><div className='w-[80px] h-[80px] rounded-full font-medium bg-[#227577] text-[#fff7f3] flex items-center justify-center text-center'>FRONT 826</div></Link>
        <Link to="/swiper"><p>Swiper</p></Link>
        <Link to="/todolist"><p>ToDolist</p></Link>
        <Link to="/weather"><p>Weather</p></Link>
        <Link to="/contacts"><p>Contacts</p></Link>
        </div>
    </div>
  )
}

export default Navbar