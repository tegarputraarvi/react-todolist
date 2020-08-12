import React, { useState } from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodosForm from '../components/TodosForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [ todos, setTodos ] = useState([
      { text: "Learning React" }
  ]) 

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  }

  return (
      <Paper>
          <Header />
          <TodosForm addTodo={addTodo}/>
          <Todos todos={todos}/>
      </Paper>
  );
}

export default TodoList;
