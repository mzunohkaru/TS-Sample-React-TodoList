import React from "react";
import { TodoModel } from "../todo.model";

import "./TodoList.css";

type TodoListProps = {
  items: TodoModel[];
  onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
