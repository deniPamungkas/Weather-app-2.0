import "./App.scss";
import data from "../src/components/config";
import Input from "./components/texInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    Username:"",
    Email:"",
    Birtday:"",
    Password:"",
    ConfirmPassword:"",
  })

  const handleChange =(e)=>{
    setValues(e.target.value)
  }
  return (
    <div className="App">
      <form>
        <h1>Register</h1>
        {data.map((item) => {
          return <Input key={item.id} {...item} value={values[item.name]} onChange={handleChange}/>;
        })}
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
}

export default App;
