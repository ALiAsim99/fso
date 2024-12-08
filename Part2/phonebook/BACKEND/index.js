/*const express=require("express");
const cors = require('cors')

const app=express();

app.use(express.json());
app.use(cors());

app.use(express.static('dist'))

let persons=[
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(req,res)=>{
    res.json(persons)
})

app.get("/info",(req,res)=>{
    let date=new Date();
    let text=`<p>Phonebook has info for ${persons.length} people<p><br/>${date}<p>`;
    res.send(text);
})

app.get("/api/persons/:id",(req,res)=>{
   const id=req.params.id;
   const person=persons.find(p=>p.id==id);
   if(person){
    res.send(person)
   }else{
    res.status(404).end("Not found ---- xxxx");
   }
})
app.delete("/api/persons/:id",(req,res)=>{
    const id=req.params.id;
    const person=persons.find(p=>p.id==id);
    if(person){
        console.log(123);
        persons=persons.filter(p=>p.id!=id);
        res.status(204).end("Deleted")
    }else{
        res.status(404).end("No id found");
    }
})

const generateId=()=>{
    const id=persons.length>0?Math.max(...persons.map(p=>Number(p.id))):0;
    return String(id+1);
}

app.post("/api/persons",(req,res)=>{
    const body=req.body;
    
    if(!body.name || !body.number){
        res.status(400).json({
            error:"Missing"
        });
        return;
    }
    const duplicatePerson=persons.find(p=>p.name==body.name);
    console.log(duplicatePerson)
    if(duplicatePerson){
        res.status(200).json({
            error:'name must be unique'
        })
        return;
    }
    const person={
        name:body.name,
        number:body.number,
        id:generateId()
    }
  
    persons=persons.concat(person);
    res.json(body);
    
})

const PORT = process.env.PORT || 3001

app.listen(PORT)
console.log(`Server running on port ${PORT}`)
module.exports = app; */


const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));
 // Serve the frontend build

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const date = new Date();
  const text = `<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`;
  res.send(text);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.send(person);
  } else {
    res.status(404).end("Not found");
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    persons = persons.filter((p) => p.id !== id);
    res.status(204).end();
  } else {
    res.status(404).end("No ID found");
  }
});

const generateId = () => {
  const id = persons.length > 0 ? Math.max(...persons.map((p) => Number(p.id))) : 0;
  return String(id + 1);
};

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    res.status(400).json({ error: "Name or number is missing" });
    return;
  }
  const duplicatePerson = persons.find((p) => p.name === body.name);
  if (duplicatePerson) {
    res.status(200).json({ error: "Name must be unique" });
    return;
  }
  const person = { name: body.name, number: body.number, id: generateId() };
  persons = persons.concat(person);
  res.json(person);
});

// Export the app for Vercel
module.exports = app;
