const Country = ({country}) => {
    return ( 
        <>
            <h2>{country.name.official}</h2>
        {
                country.capital.map( item => 
                    <div key={item}>capital {item} </div>
                )
        }
        <div>area {country.area}</div> 
        <p>
                <strong>languages:</strong>
            </p>
        { 
                Object.keys(country.languages).map( i  => 
                    <li key={i}>{country.languages[i]}</li>
                )
            }
            <p>
                <img src={country.flags.png} alt='flag'></img>
            </p>
        </>
    )
}

export default Country