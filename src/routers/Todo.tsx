import React, { useState } from "react";

import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";
import { TodoModel } from "../todo.model";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const todoAddHandler = (task: string) => {
    const newTodo = {
      id: Math.random().toString(),
      task: task,
      completed: false,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    console.log(newTodo.id);
  };
  
  const todoEditHandler = (todoId: string, task: React.ChangeEvent<HTMLInputElement>) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.task = task.target.value;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const todoCheckHandler = (todoId: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
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
        <TodoList
          items={todos}
          onCheckTodo={todoCheckHandler}
          onEditTodo={todoEditHandler}
          onDeleteTodo={todoDeleteHandler}
        />
      </header>
    </div>
  );
};

export default Todo;
