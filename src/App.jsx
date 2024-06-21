import { useState } from "react"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

const INITIAL_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_VALUES);
  const handleInputChange = (event) => {
    const input =  event.target.name;
    const val =  event.target.value;
    setUserInputs(inputs =>{
      let updatedInputs = {...inputs};
      updatedInputs[input] = parseFloat(val);
      return updatedInputs;
    });
  }
  return (
    <>
      <UserInput onUserInput={handleInputChange}/>
      <Result data={userInputs}/>
    </>
  )
}

export default App
