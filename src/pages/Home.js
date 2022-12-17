import React from 'react'
import { SearchForm } from '../components/SearchForm'
import { ListCountry } from '../components/ListCountry'
export const Home = () => {
  return (
    <div className='bg-light-gray'>
        <SearchForm />
        <ListCountry />
    </div>
  )
}
