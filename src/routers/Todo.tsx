import React, { useState } from "react";

import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";
import { TodoModel } from "../todo.model";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodo = {
      id: Math.random().toString(),
      text: text,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    console.log(newTodo.id);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      </header>
    </div>
  );
};

export default Todo;
