const Persons=({showPersons,deletePerson})=>{

    return(
        <>
             <h2>Numbers</h2>
            <ul>
            {showPersons.map((p,i)=><li key={i}>{p.name} {p.number}<button onClick={()=>deletePerson(p.id)}>Delete</button></li>)}
            </ul>
        
        </>

    )
}

export default Persons