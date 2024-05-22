const PersonFilter = ({text, onChange}) => {
    return (
        <div>
          {text}: <input onChange={onChange}/>
        </div>
    )
}

export default PersonFilter