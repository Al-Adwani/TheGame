import React from "react";
import WinnerNumber from "./WinnerNumber";

function Home() {
  const randomNumber = Math.floor(Math.random() * 20 + 1);
  
  return (
    
    <div className="home">
      
      <h1>Deliver the Mail package</h1>
      
      <WinnerNumber randomNumber={randomNumber} />
      <h4>
        You are a Mailman who has to deliver package with a beeping sound,<h5>To one of my closest <strong>"friends"</strong> who lives in the tallest
        skyscraper in the World and works for our top competetors, but you don't know which floor</h5>
      </h4>
      <p>One of the feature of being a great Mailman is to be super lucky</p>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Akronim&family=Birthstone&family=Staatliches&display=swap');
</style>
    </div>
  );
}

export default Home;
