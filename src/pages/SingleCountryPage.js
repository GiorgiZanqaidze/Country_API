import React, {useEffect, useState} from 'react'
import { useGlobalContext } from '../context'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const url = "https://restcountries.com/v2/callingcode/"
export const SingleCountryPage = () => {

  const {loading, setLoading, darkMode} = useGlobalContext()
  const [singleCountry, setSingleCountry] = useState(null)
  // get the linkk id to fetch the relevant country data
  const { id } = useParams()
  
// fetch by unique id of the country function 
  useEffect(() => {
    setLoading(true)
    async function fetchSingleCountry() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data) {
          const singleCountry = data
          setSingleCountry(singleCountry)
          setLoading(false)
        }
        else {
          setLoading(true)
          setSingleCountry(null)
        }
      }
      catch(error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchSingleCountry()
  }, [id])

  if (loading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  if (!singleCountry) {
    return (
      <div>
        no data
      </div>
    )
  }
  const {
    name,
    flag,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
    } = singleCountry[0]

    
  return (
    <article className={`${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"} inline-padding single-country-container ff-nurito`}>
      <Link to='/' className={`${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"} border-radius`}><BsArrowLeft />Back</Link>
      <div className={"container flex"}>
        <div className='img-contailer'>
          <img src={flag} alt={name} />
        </div>
        <div className={`text-container fs-2`}>
          <h3>{name}</h3>
          <div className='info'>
            <p><span className='fw-600'>Population : </span>{population}</p>
            <p><span className='fw-600'>Region : </span>{region}</p>
            <p><span className='fw-600'>Sub Region : </span>{subregion}</p>
            <p><span className='fw-600'>Capital : </span>{capital}</p>
            <p><span className='fw-600'>Top Level Domain : </span>{topLevelDomain}</p>
            <p><span className='fw-600'>Currencies : </span>{currencies[0].name}</p>
            <p><span className='fw-600'>Languages : </span>{languages[0].name}</p>
          </div>
          <div className='borders'>
            <p><span className='fw-600'>Borders : </span>
              {borders ? borders.map((item, index) => {
                return (
                  <button key={index} className={`border-radius ${darkMode ? "bg-very-dark txt-white" : "bg-light-gray txt-dark-blue"}`}>{item}</button>
                )
              }) : "none"}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}



