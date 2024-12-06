import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [personFilter,setFilter]=useState('')

  const addPerson=(e)=>{
    e.preventDefault();
    if(persons.some(p=>p.name==newName)){
      alert(`${newName} already in the phonebook`)
      return
    }
    const newPerson={
      name:newName,
      number:newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
  }
  persons.forEach(p=>{

  })
  const handleNameChange=e=>{
    setNewName(e.target.value)
  }
  const handleNumberChange=e=>{
    setNewNumber(e.target.value)
  }
  const showPersons=personFilter?persons.filter(p=>p.name.toLowerCase().includes(personFilter.toLowerCase())):persons;

  return (
    <div>
      <Filter value={personFilter} setFilter={setFilter}/>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Persons showPersons={showPersons}/>
    </div>
  )
}

export default App

