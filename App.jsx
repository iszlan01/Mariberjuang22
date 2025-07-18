
import React, { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [credits, setCredits] = useState(1000);
  const [gameResult, setGameResult] = useState("");
  const [view, setView] = useState("home");

  const playSlot = () => {
    const win = Math.random() < 0.4;
    const newCredits = credits + (win ? 200 : -100);
    setCredits(newCredits);
    setGameResult(win ? "🎉 Menang 200 kredit!" : "😢 Kalah 100 kredit.");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🎰 Mariberjuang22</h1>
      <p>Selamat datang ke laman simulasi kasino</p>
      <h2>💰 Kredit: {credits}</h2>
      <button onClick={playSlot} style={{ padding: 10, fontSize: 16, margin: 10 }}>Main Slot</button>
      <p>{gameResult}</p>
    </div>
  );
}
