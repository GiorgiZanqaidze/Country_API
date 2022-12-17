import React, {useRef} from 'react'
import { useGlobalContext } from '../context'



export const SearchForm = () => {
  const {setSearchTerm, darkMode, setSelector} = useGlobalContext()
  const textRef = useRef()
  
  // alerttttttttttttttttttt
  // const [selector, setSelector] = React.useState('')
  const sectionRef = useRef()
  const handleSelect = () => {
    setSelector(sectionRef.current.value)
  }
  // alerttttttttttttttt

  const handleTxt = () => {
    const input = textRef.current.value
    if (input.length > 0) {
      setSearchTerm(input)
    }
    else {
      setSearchTerm('a')
    }
  }
  const preventRefresh = (e) => {
    e.preventDefault()
  }

  return (
    <form className={`${darkMode ? "bg-very-dark" : "bg-light-gray"} max-width inline-padding flex form-container ff-nurito `} onSubmit={preventRefresh}>
      <input className={`${darkMode ? "bg-dark txt-white" : "bg-white txt-dark-gray"} fs-1 border-radius ff-nurito`} type='text' name="name" ref={textRef} onChange={handleTxt} placeholder="Search for a country"/>
      <select className={`${darkMode ? "bg-dark txt-white" : "bg-white txt-dark-gray"} border-radius`} id="cars" name="cars" ref={sectionRef} onChange={handleSelect}>
        <option value="none" default >Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  )
}
