import React, { useState } from 'react'
import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/TodoItem';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';


const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar papa', completed: true },
  { text: 'Cortar carne', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />))}
      </TodoList>
      
      <CreateTodoButton />

    </React.Fragment>
  )
}

export default App
