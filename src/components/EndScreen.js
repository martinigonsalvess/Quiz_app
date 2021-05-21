import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Contexts";
import "../App.css";

function EndScreen() {
  const { score } = useContext(QuizContext);

  return <div>EndScreen</div>;
}

export default EndScreen;
