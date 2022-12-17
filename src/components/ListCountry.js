import React from 'react'
import { useGlobalContext } from '../context'
import { Loading } from "./Loading"
import { SingleCountry } from './SingleCountry'
export const ListCountry = () => {
  const {loading, countryData, darkMode} = useGlobalContext()



  if (loading) {
    return (
      <Loading />
    )
  }

  if (countryData.length < 1) {
    return (
      <div className={`${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"} no-info`}>
        <h1>no relevant country</h1>
      </div>
    )
  }


  return (
    <ul className={`${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"} inline-padding countries-list-container grid`}>
      {countryData.map((country) => {
        return (
          <SingleCountry key={country.name} {...country}/>
        )
      })}
    </ul>
  )
}
