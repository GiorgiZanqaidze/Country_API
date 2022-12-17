import React from 'react'
import { useGlobalContext } from '../context'
export const Loading = () => {

  const {darkMode} = useGlobalContext()
  return (
    <div className={` ${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"} inline-padding loading ff-nurito`}>Loading...</div>
  )
}
