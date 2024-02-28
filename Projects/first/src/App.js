import { Child } from "./Child";

function App() {
  let name="Pavan", name1="Radha", name2="Surya";
  const age=26, age1=25, age2=27;
  return (

      <div>
        <Child na={name} age={age}/>
        <Child na={name1} age={age1}/>
        <Child na={name2} age={age2}/>
      </div>
  )    
}

export default App;
