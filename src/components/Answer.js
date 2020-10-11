import React from "react";

export default function Answer(props) {
  return (
    <div>
      <button
        className="btn-answer"
        type="button"
        onClick={() => props.handleClick(props.choice)}
      >
        {props.answer}
      </button>
    </div>
  );
}
