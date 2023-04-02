import { useState } from "react";
import "./styles.css";

import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodos } from "./compornents/IncompleteTodos";
import { CompleteTodos } from "./compornents/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomleteTodos, setIncomleteTodos] = useState([]);
  const [comleteTodos, setComleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText) {
      const newTodos = [...incomleteTodos, todoText];
      setIncomleteTodos(newTodos);
      setTodoText("");
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomleteTodos];
    newTodos.splice(index, 1);
    setIncomleteTodos(newTodos);
  };

  const onClickComplete = (index, todo) => {
    onClickDelete(index);
    const newTodos = [...comleteTodos, todo];
    setComleteTodos(newTodos);
  };

  const onClickReturn = (index, todo) => {
    const newTodos = [...comleteTodos];
    newTodos.splice(index, 1);
    setComleteTodos(newTodos);

    const newIncompleteTodos = [...incomleteTodos, todo];
    setIncomleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomleteTodos.length >= 5}
      />
      {incomleteTodos.length >= 5 && (
        <p style={{ color: "red", margin: "8px" }}>TODOは5個まで登録できます</p>
      )}
      <IncompleteTodos
        todos={incomleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos todos={comleteTodos} onClickReturn={onClickReturn} />
    </>
  );
};
