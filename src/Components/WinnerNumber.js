import React from "react";
import { useState } from "react";

/* let attempts = 5; */

function WinnerNumber({ randomNumber }) {
  const [winnerNumber, setWinnerNumber] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [status, setStatus] = useState("");
  const [result, setResult] = useState("");
  const [hint, setHint] = useState("");

  const weekUser = () => {
    if (17 >= +randomNumber && +randomNumber >= 1) {
      setHint(
        <h2>
          You need help what are you a <em>"child"</em>
        </h2>
      );
    } else if (60 >= +randomNumber && +randomNumber >= 18) {
      setHint(
        <h2>
          I didn't expect an <em>"adult"</em> would press the Hint button
        </h2>
      );
    } else if (100 >= +randomNumber && +randomNumber >= 61) {
      setHint(
        <h2>
          even though I respect the <em>"Eldery"</em> I won't give you a Hint
        </h2>
      );
    }
  };

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
        setResult(<h1> You survived with no injuries </h1>);
        setStatus("");
        setAttempts("");
        setHint("");
      } else if (attempts < 3) {
        setResult(<h1> You survived with minimum injuries </h1>);
        setStatus("");
        setAttempts("");
        setHint("");
      }
    } else if (attempts <= 0) {
      setResult(<h1>RIP</h1>);
      setStatus("");
      setAttempts("");
      setHint("");
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="playerInput">
      {attempts > 0 ? <p>You have {attempts} Attempts</p> : ""}

      <p>{status}</p>
      <p>{result}</p>
      <p>{hint}</p>
      <input
        className="userInput"
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
      <button onClick={weekUser}>Hint</button>
    </div>
  );
}

export default WinnerNumber;
