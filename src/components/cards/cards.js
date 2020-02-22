import React from 'react';
import Card from './card/card';

export default function Cards(props) {
  return (
    <div>
      {props.tasks.map(task => (
        <Card
          key={task._id}
          title={task.title}
          content={task.content}
          responsible={task.responsible}
        />
      ))}
    </div>
  );
}
