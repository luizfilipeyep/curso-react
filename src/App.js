import React from "react";
import "./style.css";

import Button from "./Button"

const element = "Digital Innovation"
const element2 = <h1>Olá turma =D</h1>

function sum(a,b) {
  return a+b
}

function primeiroJSX() {
  return (
    <div>
      <p>Luiz Omena</p>
      <p>Introdução ao ReactJS</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="teste">
      {primeiroJSX()}
      <p>Soma: {sum(10, 4)}</p>

      {element}
      {element2}

      <Button name="teste" />
    </div>
  );
}
