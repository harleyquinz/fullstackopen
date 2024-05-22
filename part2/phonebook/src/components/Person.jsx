const Person = ({allPersons, persons, deletePerson}) => {
    { 
        if (persons.length === 0){

            return (
                <>
                    {
                        allPersons.map( person =>
                            <div key={person.name}>
                                {person.name} - {person.number}
                                <button type="button" onClick={()=>deletePerson(person.id)}> Delete </button>
                            </div>
                            
                        ) 
                    }
                </>
            )

        } 
        else {
            
            return (
                <>
                    {
                        persons.map( person =>
                            <div key={person.name}>
                                {person.name} - {person.number}
                                <button type="button" onClick={()=>deletePerson(person.id)}> Delete </button>
                            </div>
                            
                        ) 
                    }
                </>
            )
                
        }
    }    
}

export default Person