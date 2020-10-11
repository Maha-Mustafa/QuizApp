import React from "react";
import Answer from "./Answer";
export default function AnswerList(props) {
  const options = [];
  for (let i = 0; i < props.dataSet.options.length; i++) {
    options.push(
      <Answer
        choice={i}
        answer={props.dataSet.options[i]}
        handleClick={props.handleClick}
      />
    );
  }
  return (
    <div>
      <h2>{options}</h2>
    </div>
  );
}
