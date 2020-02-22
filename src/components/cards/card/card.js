import React from 'react';

export default function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span>{props.responsible}</span>
    </div>
  );
}
