const Persons=({showPersons})=>{
    return(
        <>
             <h2>Numbers</h2>
            <ul>
            {showPersons.map((p,i)=><li key={i}>{p.name} {p.number}</li>)}
            </ul>
        
        </>

    )
}

export default Persons