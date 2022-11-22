import "./App.scss";
import data from "../src/components/config";
import Input from "./components/texInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    Username:"",
    Email:"",
    Birthday:"",
    Password:"",
    ConfirmPassword:"",
  })

  const handleChange =(e)=>{
    setValues({...values,[e.target.name] :e.target.value})
  }
  const handleSub=(e)=>{
    e.preventDefault()
    console.log(...values,[e.target]);
  }
  return (
    <div className="App">
      <form>
        <h1>Register</h1>
        {data.map((item) => {
          return <Input key={item.id} {...item} value={values[item.name]} onChange={handleChange}/>;
        })}
        <input type='submit' value='Submit' onClick={handleSub}/>
      </form>
    </div>
  );
}

export default App;
