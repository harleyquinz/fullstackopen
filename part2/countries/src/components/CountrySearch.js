const CountrySearch = ({text, onChange}) => {
    return (
        <>
            {text}: <input onChange={onChange}/>
        </>
    )
}

export default CountrySearch