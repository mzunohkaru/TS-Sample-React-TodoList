import React, { useRef, useEffect } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // コンポーネントがマウントされた直後にテキストフィールドにフォーカスが当たるようになります
  useEffect(() => {
    textInputRef.current?.focus();
  }, []);
  
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (!enteredText) return;
    props.onAddTodo(enteredText);
    textInputRef.current.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Todo追加</button>
    </form>
  );
};

export default NewTodo;
