import React from "react";
import "./styles.css";
import Questionnaire from "./components/Questionnaire";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">JavaScript Quiz</h1>
      <Questionnaire />
    </div>
  );
}
