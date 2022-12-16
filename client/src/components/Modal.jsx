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
        <span onClick={() => setActive(false)} className="exit__btn">
          X
        </span>
        <h3>You can edit your todo</h3>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="edit__input"
        />
        <div className="modal-btns__wrappper">
          <button
            className="modal-update__btn"
            onClick={(e) => editDescriptionHandler(e)}
          >
            Update
          </button>
          <button
            className="modal-close__btn"
            onClick={() => {
              setActive(false);
              setDescription(todo.description); // save original input val
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
