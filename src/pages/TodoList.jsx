import React from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodosForm from '../components/TodosForm';
import Todos from '../components/Todos';

const TodoList = () => {
  return (
      <Paper>
          <Header />
          <TodosForm />
          <Todos />
      </Paper>
  );
}

export default TodoList;
