import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-[20px] pt-5">
        <Link to="/calendar"><p>Calendar</p></Link>
        <Link to="/calculator"><p>Calculator</p></Link>
        <Link to="/gallery"><p>Gallery</p></Link>
        <Link to="/currency"><p>Currency</p></Link>
        <Link to="/swiper"><p>Swiper</p></Link>
        <Link to="/todolist"><p>Todolist</p></Link>
        <Link to="/weather"><p>Weather</p></Link>
        <Link to="/contacts"><p>Contacts</p></Link>
        </div>
    </div>
  )
}

export default Navbar