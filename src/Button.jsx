import React from 'react';

function soma(a, b) {
  alert(`A soma entre ${a} e ${b} é ${a+b}`)
}

export default function Button(props) {
  const name = props.name;

  return <button onClick={() => soma(1, 2)}>{name}</button>;
}