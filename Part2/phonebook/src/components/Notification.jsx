import '../App.css'
const Notification=({message})=>{

    if(message==null){
        return;
    }
    let className=message.includes("removed")?"error":"success";
   
    return(
        <div className={className}>
            <p>{message}</p>
        </div>
    )
}

export default Notification