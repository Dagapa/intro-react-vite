import React from "react";
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from "../TodoContext/TodoProvider";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { Modal } from "../Modal/modal";
import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}

          />))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>)}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>)
}

export { AppUI };