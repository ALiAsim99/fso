import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Form from './components/Form'
import Notification from './components/Notification'
import personService from './service/person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [personFilter,setFilter]=useState('')
  const [message,setMessage]=useState(null);

  useEffect(()=>{
    personService.getAll()
    .then(initialPerson=>{
      setPersons(initialPerson)});
    
  },[])

  const deletePerson=(id)=>{
    const findPerson=persons.find(p=>p.id==id);
    const confirm=window.confirm(`Delete ${findPerson.name}`);
    if(confirm){
      personService
      .deletePerson(id)
      .then(returnPerson=>{
        setPersons(persons.filter(p=>p.id!==returnPerson.id))
        setMessage(`${findPerson.name} has been deleted successfully`);
        setTimeout(()=>setMessage(null),500);
      });
    }

  }

  const addPerson=(e)=>{
    e.preventDefault();
    const duplicatePerson=persons.find(p=>p.name==newName);
    
    if(duplicatePerson){
      let confirm=window.confirm(`${newName} already exists.Do you want to update the phone number?`);
      if(confirm){
          const id=duplicatePerson.id;
          const newPerson={...duplicatePerson,number:newNumber};
          personService
          .update(id,newPerson)
          .then(returnPerson=>setPersons(persons.map(p=>p.id==id?returnPerson:p)))
          .catch(e=>{
            setMessage(`${duplicatePerson.name} has already been removed`);
            setTimeout(()=>setMessage(null),500);
            setPersons(persons.filter(p=>p.id!==id));
          })
          setNewName("")
          setNewNumber("")
      }
      return;
      
    }
    const newPerson={
      name:newName,
      number:newNumber
    }
    
    personService.create(newPerson)
    .then(person=> {
      setPersons(persons.concat(person))
      setMessage(`${newPerson.name} has been added successfully`);
        setTimeout(()=>setMessage(null),500);
    })
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange=e=>{
    setNewName(e.target.value)
  }
  const handleNumberChange=e=>{
    setNewNumber(e.target.value)
  }
  const showPersons=personFilter?persons.filter(p=>p.name.toLowerCase().includes(personFilter.toLowerCase())):persons;

  return (
    <div>
      <Notification message={message}/>
      <Filter value={personFilter} setFilter={setFilter}/>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <Persons showPersons={showPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App

