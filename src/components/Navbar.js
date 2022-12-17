import React from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useGlobalContext } from '../context'
export const Navbar = () => {
  const {darkMode, setDarkMode} = useGlobalContext()
  
  return (
    <nav className= {`${darkMode ? 'bg-dark txt-white' : "bg-white txt-dark-blue"} ff-nurito fs-200 navbar-container flex inline-padding`}>
        <h1>where in the world ?</h1>
        <button className={`toggle-btn ${darkMode ? "txt-white" : "txt-dark-blue"}`} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <p>< MdOutlineDarkMode /> Light Mode</p> :  <p><MdDarkMode /> Dark Mode</p>}
        </button>
    </nav> 
  )
}

