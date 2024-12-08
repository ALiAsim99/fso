const Filter=({personFilter,setFilter})=>{
    return(
        <>
             <h2>Phonebook</h2>
            <div>
                filter shown with <input value={personFilter} onChange={(e)=>setFilter(e.target.value)}/>
            </div>
        </>
    )
}

export default Filter