import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

export const SingleCountry = ({name, population, region, capital, flag, callingCodes}) => {
  const {darkMode} = useGlobalContext()
  return (
    <li className={`country-container ff-nurito border-radius`}>
      <img src={flag} alt={name}/>
      <h3>{name}</h3>
      <p><span>Populacion :</span> {population}</p>
      <p><span>Region :</span> {region}</p>
      <p><span>Capital :</span> {capital}</p>
      <Link className={`${darkMode ? 'bg-dark txt-white' : "bg-white txt-dark-blue"} border-radius dark-shadow`} to={`/country/${callingCodes}`} >Details</Link>
    </li>
  )
}
