import React, { useState, useEffect } from 'react';
import Cards from '../../components/cards/cards';
import Axios from 'axios';

export default function Tasks(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    Axios.get('http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzODEyMzUsImV4cCI6MTU4Mjk4NjAzNX0.o8bEMq94Ej_CspLEAwbPy3iQyZNk-ZKlDubRTgO3U0M'
      }
    })
      .then(res => setTasks(res.data.results))
      .catch(error => console.error(error));
  }, []);

  const tasksView =
    tasks.length > 0 ? <Cards tasks={tasks} /> : 'Loading tasks...';

  return <div>{tasksView}</div>;
}
