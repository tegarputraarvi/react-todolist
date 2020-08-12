import React, { useState } from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodosForm from '../components/TodosForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [ todos, setTodos ] = useState([]); 
  const [ showAdd, setShowAdd ] = useState(false);

  const addTodo = value => {
    
    if (todos.length < 10) {
        const addedTodo = [...todos, { text: value, isCompleted: false }];

        setTodos(addedTodo);
    } else {
        alert("Only 10 todos is allowed");
    }
    
  }

  const completeTodo = (index) => {
      const addedTodo = [...todos] ;
      addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

      setTodos(addedTodo);
  }

  const clearTodos = () => setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
      <Paper>
          <Header showAddToggle={ showAddToggle } showAdd={ showAdd } clearTodos={ clearTodos }/>
          <TodosForm addTodo={ addTodo } showAdd={ showAdd }/>
          <Todos todos={ todos } completeTodo={ completeTodo } />
      </Paper>
  );
}

export default TodoList;
