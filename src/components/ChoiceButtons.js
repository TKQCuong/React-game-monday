import React from "react";

export function ChoiceButtons(props) {
    return (
    <div className="row mb-3 button-div">
        <button onClick={()=>props.onPlayerChoose('rock')}>Rock</button>
        <button onClick={()=>props.onPlayerChoose('scissors')}>Scissors</button>
        <button onClick={()=>props.onPlayerChoose('paper')}>Paper</button>
    </div>
    )
  }

