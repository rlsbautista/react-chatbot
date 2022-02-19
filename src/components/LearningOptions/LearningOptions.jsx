import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Web Development",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Networking", handler: () => {}, id: 2 },
    { text: "Computer Science", handler: () => {}, id: 3 },
    { text: "EMC", handler: () => {}, id: 4 },
    { text: "Cyber Security", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};
export default LearningOptions;
