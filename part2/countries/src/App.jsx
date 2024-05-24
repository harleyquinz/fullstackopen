import {useState} from "react"
import countries from "./services/countries"
import CountrySearch from "./components/CountrySearch"
import Content from "./components/Content"

const App = () => {
  const [filteredCountries, setFilteredCountries] = useState(null)

  const handleNameCountry = (event) =>{
    countries
      .getByName(event.target.value)
      .then(filtered => {
        setFilteredCountries(filtered)
      })
      .catch(error => {
        console.log(error)
      
        }  
      )
  }

  return (
    <div>
      <CountrySearch text='find country' onChange={handleNameCountry}/>
      <Content countries={filteredCountries} setCountries={setFilteredCountries}/>
    </div>
  )

}

export default App;
