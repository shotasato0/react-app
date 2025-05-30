import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button.jsx";

function App() {
  
  const handleClick = () => {
    console.log('clicked!')
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        <span>クリック！</span>
      </Button>
    </>
  );
}

export default App;
