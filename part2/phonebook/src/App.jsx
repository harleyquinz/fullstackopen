import { useState, useEffect } from 'react'
import Title from './components/Title'
import PersonFilter from './components/PersonFilter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'
import phonebookService from './services/phonebook'

const App = () => {
  const [allPersons, setAllPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState(allPersons)
  const [message, setMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState('success')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setAllPersons(initialPersons)
      })
  }, [])

  const handleNameChange    = (event) => setNewName(event.target.value)
  const handleNumberChange  = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {

    event.preventDefault()
    
    const person = allPersons.find( person => { 
                                    return person.name.toLowerCase() === newName.toLowerCase() 
                                  })

    if (person === undefined || !person ){

      const personObject = {
        name: newName,
        number: newNumber
      }

      phonebookService
      .create(personObject)
      .then(response => {
        setAllPersons(allPersons.concat(response))
        setNewName('')
        setNewNumber('')

        setMessage(
          `Added ${response.name}.`
        )
        setTypeMessage('success')
        setTimeout(() => {
          setMessage(null)
        }, 5000)

      })
      .catch(error => {
        console.log(error)
        setMessage(
          `${error.response.data}.`
        )
        setTypeMessage('error')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    } 
    else { 

      if (window.confirm(`${newName} is already added to phonebook. Would you like to update the phone number?`)) {

        const personObject = {
          name: newName,
          number: newNumber
        }

        phonebookService
        .update(person.id, personObject)
        .then(response => {
          const newPersons = allPersons.map(newPerson => newPerson.id !== person.id ? newPerson : response)
          setAllPersons(newPersons)
          setNewName('')
          setNewNumber('')

          setMessage(
            `Updated ${response.name}.`
          )
          setTypeMessage('success')

          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          setMessage(
            `${error.response.data}.`
          )
          setTypeMessage('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

      }
    }
  }

  const deletePerson = (id) => {
    const person = allPersons.find( person => { return person.id === id })

    if (person){
      if (window.confirm(`Delete ${person.name} ?`)) {
        phonebookService
        .remove(id)
        .then(response => {
          setAllPersons(allPersons.filter(person => person.id !== response.id))
          setMessage(
            `Deleted ${response.name}.`
          )
          setTypeMessage('success')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          setMessage(
            `${error.response.data}.`
          )
          setTypeMessage('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
     }
    }
    else 
    { alert(`Person Not found. `) }

  }

  const handleFilterChange = (event) => {
    if (event.target.value !== undefined && event.target.value !== ''){
      const filteredPersons = allPersons.filter( person => { return person.name.toLowerCase().includes(event.target.value.toLowerCase()) } )
      setPersons(filteredPersons)
    } else { 
      setPersons(allPersons) 
    }
  }

  return (
    <div>
      <Title title='Phonebook' />
      <PersonFilter text={'filter shown with'} onChange={handleFilterChange} />
      <Title title='add a new' />
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} 
                  handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <Title title='Numbers' />
      <Notification message={message} type={typeMessage}/>
      <Person allPersons={allPersons} persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App