import React from "react";
import { useState } from "react";

/* let attempts = 5; */

function WinnerNumber({ randomNumber }) {

  const [winnerNumber, setWinnerNumber] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("")
  const [hint, setHint] = useState("")
  
  const compare = () => {
    setAttempts(attempts - 1);
    console.log(winnerNumber, randomNumber, attempts);
    if (+winnerNumber - +randomNumber > 0) {
      setStatus("Lower");
    }
    if (+randomNumber - +winnerNumber > 0) {
      setStatus("Higher");
    }
    if (+winnerNumber === +randomNumber && attempts >= 0) {
          if (attempts >= 3) {
            setResult(<h1> You survived with no injuries </h1>)
            setStatus("")
            
            

          } else if (attempts < 3) {
           setResult(<h1> You survived with minimum injuries </h1>)
           setStatus("")
          }
    } else if (attempts <= 0) {
      setResult(<h1>RIP</h1>);
      setStatus("")
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    
    <div className = "playerInput">
      {attempts > 0 ? <p>You have {attempts} Attempts</p> : ""}

      <p>{status}</p>
      <p>{result}</p>
      
      <input className = "userInput"
        onChange={(event) => setWinnerNumber(event.target.value)}
        id="randomInput"
        type="Number"
        min="1"
        max="20"
        placeholder="1 to 100"
      />
      <br />
      <button onClick={compare}>Submit</button>
      <button onClick={refreshPage}>Reset</button>
      
    </div>
   
  );
}

export default WinnerNumber;
