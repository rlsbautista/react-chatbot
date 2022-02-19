import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "MITADWEL-BOT",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "weblearning",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "HTML",
            url:
              "https://www.w3schools.com/html/",
            id: 1,
          },
          {
            text: "CSS",
            url:
              "https://www.w3schools.com/css/default.asp",
            id: 2,
          },
          {
            text: "PHP",
            url: "https://www.w3schools.com/php/default.asp",
            id: 3,
          },
        ],
      },
	  
    },
  ],
};

export default config;
