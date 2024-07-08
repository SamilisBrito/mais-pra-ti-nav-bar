import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import React, { useState } from "react";

function App() {
  const socialNetworks = ["instagram", "facebook", "LinkedIn"];

  const [text, setText] = useState("");

  function onTextChange(event) {
    const text = event.target.value;
      setText(text)
  }
  return (
    <>
      <NavBar />
      <textarea
        placeholder='test'
        onChange={onTextChange}
        value={text}
      ></textarea>
      <p>
        {text}
      </p>
      <Footer socialNetworks={socialNetworks} />
    </>
  );
}

export default App;
