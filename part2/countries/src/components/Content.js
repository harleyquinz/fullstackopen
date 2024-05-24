import Country from "./Country";
const Content = ({countries, setCountries}) => {
    console.log(countries);
    if (countries)
    { 
        if(countries.length === 1)
        {
            return (
                <>
                    <Country country={countries[0]} />
                </>
            )
            
        } 
        else if ( countries.length > 10 ){
            return (
                <>
                    <p>too many matches, specify another filter</p>
                </>
            )
        }
        else {
            return (
                <>
                    { 
                        countries.map( item => 
                            <p key={item.name.common} >
                                <span>{item.name.official}</span>
                                <button onClick={() => setCountries([item])}> show </button>
                            </p>
                        )
                    }
                </>
            )
        }
    }
}

export default Content