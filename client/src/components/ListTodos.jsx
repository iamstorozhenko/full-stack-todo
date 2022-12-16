import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4500/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));

      console.log(deleteTodo);
    } catch (error) {
      console.error(error);
    }
  };
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4500/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="wrapper__list">
      {todos.map((todo) => (
        <div key={todo.todo_id} className="todo__wrapper">
          <h2>{todo.description}</h2>
          <div className="btns__wrapper">
            <EditTodo todo={todo} />
            <button
              onClick={() => deleteTodo(todo.todo_id)}
              className="delete__btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {/* <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ListTodos;
