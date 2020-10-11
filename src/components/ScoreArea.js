import React from "react";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";
export default function ScoreArea(props) {
  return (
    <div className="score-wrapper">
      <h2>score area</h2>
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  );
}
