const Header=({course})=>{
  return(
    <h1>{course}</h1>
  )
}
const Part=({name,exercises})=><p>{name} {exercises}</p>
const Content=({parts})=>{
  return<>
   {parts.map(p=><Part name={p.name} exercises={p.exercises} />)}
  </>
}

const Total=({parts})=>{
  let sum=parts.reduce((x,y)=>x+y.exercises,0);  
  return <p>{sum}</p>
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}  />
      <Total parts={parts} />
    </div>
  )
}

export default App