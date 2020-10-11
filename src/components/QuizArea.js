import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreeting";
import FailMessage from "./FailMessage";

export default function QuizArea(props) {
  // if (props.isFinished && props.correct >= 2) {
  //   return <UserGreeting />;
  // } else if (props.incorrect === 2) {
  //   return <FailMessage />;
  // }
  if (props.isFinished) {
    if (props.correct >= 2) {
      return <UserGreeting />;
    } else {
      return <FailMessage />;
    }
  }
  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
}
