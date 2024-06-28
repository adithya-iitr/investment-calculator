import InputBox from "./components/InputBox"
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [results, setResults]=useState({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0,
  });
function onInputChange(newValue,id){
    setResults((prevResults)=>{
      return{
        ...prevResults,
        [id]:parseInt(newValue)
      }
    })
  }
  const isValidDuration=(results.duration>0?true:false)
  return (
    <>
    <div className="input-group">
      <InputBox onInputChange={onInputChange}/>
    </div>
    {isValidDuration? <Results userInput={results}/>:<p className="center">Please enter a valid duration</p>}
    </>
  )
}

export default App
