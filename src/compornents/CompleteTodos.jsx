import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index, todo)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
