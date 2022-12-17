import React, {useState, useEffect, useContext, useCallback} from 'react'
const url = "https://restcountries.com/v2/name/"

// const url2 = "https://restcountries.com/v2/callingcode/51"

// const url3 = "https://restcountries.com/v3.1/region/europe"

const AppContext = React.createContext()


const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [countryData, setCountryData] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const [selector, setSelector] = useState('none')


  function handleRegion(region) {
    if (selector === 'none' || region === selector) {
      return true
    }
    else {
      return false
    }
  }


  // fetch by name function 
  const fetchData = useCallback(async () => {
      setLoading(true)
      try {
          const response = await fetch(`${url}${searchTerm}`)
          let data = await response.json()
          // if response is not array it is object with 'status' property. typeof array end typeof object both are objects. So if data has not property of 'status' set it to my countryData. On the other hand, countryData === null 
          if (data && typeof(data.filter) === 'function') {
            data = data.filter((item) => handleRegion(item.region))
            const countries = data.filter((item, index) => index < 50)
            const newCountries = countries.map((item) => {
              const {name, population, region, capital, flag, callingCodes} = item
              return (
                {
                  name,
                  population,
                  region,
                  capital,
                  flag,                  
                  callingCodes,
                }
              )
            })
            setCountryData(newCountries)
          }
          else {
            setCountryData([])
          }
          setLoading(false)
      }
      catch(error){
        console.log(error)
        setLoading(false)
      }
  },[searchTerm, selector])



  useEffect(() => {
    fetchData()
  }, [searchTerm, selector, fetchData])
    
  return (
    <AppContext.Provider
      value={{
        countryData,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        darkMode,
        setDarkMode,
        setSelector
      }}
    >
      {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }