const url="http://localhost:3001/api/persons";
import axios from "axios";

const getAll=()=>{
    const promise=axios.get(url);
    return promise.then(response=>response.data);
}

const create=(newPerson)=>{
    const promise=axios.post(url,newPerson);
    return promise.then(response=>response.data);
}

const update=(id,person)=>{
    const promise=axios.put(`${url}/${id}`,person);
    return promise.then(response=>response.data);
}

const deletePerson=(id)=>{
    const promise=axios.delete(`${url}/${id}`);
    return promise.then(response=>response.data);
}

export default {getAll,create,update,deletePerson}