import React from "react";
import WinnerNumber from "./WinnerNumber";

function Home() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  return (
    <div className="home">
      <h1>Deliver the Mail package</h1>

      <WinnerNumber randomNumber={randomNumber} />
      <h4>
        You have been assigned to deliver a package with a beeping sound,
        <h5>
          To one of my closest <strong>"friends"</strong> he lives in the
          tallest skyscraper in the City and he works for our top competetors,
          but I don't know which floor his apartment is, you have to guess it.
        </h5>
      </h4>
      <p>One of the features of being a great Mailman is to be super lucky</p>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Akronim&family=Birthstone&family=Staatliches&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      </style>
    </div>
  );
}

export default Home;
