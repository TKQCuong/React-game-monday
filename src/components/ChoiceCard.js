import React from "react";
const DEFAULT_IMG =
  "https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png?itok=EB8fRWP9";
export default function ChoiceCard(props) {
  const displayResult = () => {
    if (props.borderColor === "black") return "TIE";
    else if (props.borderColor === "winner") return "Win";
    else if (props.borderColor === "loser") return "Loss";
    return "";
  };

  return (
    <div className={`choice-card ${props.borderColor}`}>
      <h1>{props.title}</h1>
      <img src={props.imgURL || DEFAULT_IMG} />
      <h3>{displayResult()}</h3>
    </div>
  );
}
