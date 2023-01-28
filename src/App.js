import React from "react";
import "./style.css";

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
    </div>
  );
}
