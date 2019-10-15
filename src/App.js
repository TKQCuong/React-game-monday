import { ChoiceButtons } from "./components/ChoiceButtons";
import React, { useState } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import { CHOICES, randomComputerChoice, decideOutcome } from "./utils";

function App() {
  const [result, setResult] = useState("Let's start!!");
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [gameHistory, setHistory] = useState([]);

  const onPlayerChoose = playerChoice => {
    const computerChoice = randomComputerChoice(CHOICES); // only appear computer choice
    const result = decideOutcome(playerChoice, computerChoice);
    setResult(result);
    setPlayer(CHOICES[playerChoice]);
    setComputer(CHOICES[computerChoice]);
    setHistory(gameHistory);
    gameHistory.push(result);
  };

  const borderColor = (target, res) => {
    if (res === "TIE") return "black";
    else if (res === "YOU WIN !!")
      return target === "player" ? "winner" : "loser";
    else if (res === "Oops! You Loss")
      return target === "computer" ? "winner" : "loser";
    return "blank";
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col row-contain">
            <ChoiceCard
              title="Computer"
              imgURL={computer && computer.url}
              borderColor={borderColor("computer", result)}
            />
            <h1>{result}</h1>
            <div className="col-md-4 themed-grid-col">
              <h3>History</h3>
              <ul>
                {gameHistory.map(result => {
                  return <li>{result}</li>;
                })}
              </ul>
            </div>
            <ChoiceCard
              title="You"
              imgURL={player && player.url}
              borderColor={borderColor("player", result)}
            />
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
