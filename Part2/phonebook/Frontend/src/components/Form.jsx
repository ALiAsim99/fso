const Form=({addPerson,newName,handleNameChange,newNumber,handleNumberChange})=>{
    return(
        <>
        <h1>add new</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number:<input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    )
}

export default Form