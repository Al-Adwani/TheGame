import React from "react";
import { useState } from "react";
/* let attempts = 5; */

function WinnerNumber({ randomNumber }) {
  const [winnerNumber, setWinnerNumber] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [status, setStatus] = useState("");
  const [hint, setHint] = useState("");

  const compare = () => {
    setAttempts(attempts - 1);
    console.log(winnerNumber, randomNumber, attempts);
    if (+winnerNumber - +randomNumber > 0) {
      setStatus("you are high");
    }
    if (+randomNumber - +winnerNumber > 0) {
      setStatus("you are lower");
    }
    if (+winnerNumber === +randomNumber && attempts >= 0) {
          if (attempts > 3) {
            alert("you won with high score")
          } else if (attempts < 3) {
            alert("you won with low score")
          }
    } else if (attempts <= 0) {
      alert("You lost");
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className = "playerInput">
      {attempts > 0 ? <p>{attempts} Attempts Remaining</p> : "You Lost"}

      <p>{status}</p>

      <input
        onChange={(event) => setWinnerNumber(event.target.value)}
        id="randomInput"
        type="Number"
        min="1"
        max="20"
        placeholder="1 to 20"
      />
      <br />
      <button onClick={compare}>Submit</button>
      <button onClick={refreshPage}>Reset</button>
      
    </div>
  );
}

export default WinnerNumber;
