import React, { useState } from "react";

const Modal = ({ active, setActive, todo }) => {
  const [description, setDescription] = useState(todo.description);

  const editDescriptionHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:4500/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1>Edit todo</h1>
          <span onClick={() => setActive(false)}>x</span>
        </div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="edit__btn"
          onClick={(e) => editDescriptionHandler(e)}
        >
          Edit
        </button>
        <button
          className="close__btn"
          onClick={() => {
            setActive(false);
            setDescription(todo.description); // save original input val
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
