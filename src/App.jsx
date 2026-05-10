import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";

function App() {
  function handleJoin() {
    alert("You joined the waitlist");
  }

  return (
    <>
      <Navbar />
      <Hero onJoin={handleJoin} />
      <Features />
      <Waitlist />
    </>
  );
}

export default App;
