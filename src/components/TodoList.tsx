import React from "react";
import { TodoModel } from "../todo.model";

import "./TodoList.css";

type TodoListProps = {
  items: TodoModel[];
  onCheckTodo: (id: string) => void;
  onEditTodo: (id: string, task: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "auto" }}>
            <input
              type="checkbox"
              onChange={(e) => props.onCheckTodo(todo.id)}
              className="inputText"
            />
          </div>
          <input
            type="text"
            value={todo.task}
            onChange={(e) => props.onEditTodo(todo.id, e)}
            style={{ flexGrow: 1, textAlign: "center", outline: "none" }}
          />

          {todo.completed && (
            <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
