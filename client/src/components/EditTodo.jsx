import React, { useState } from "react";
import Modal from "./Modal";

const EditTodo = ({ todo }) => {
  const [modalActive, setModalActive] = useState(false);
  

  return (
    <div>
      <button onClick={() => setModalActive(true)} className="edit__btn">Edit</button>
      <Modal active={modalActive} setActive={setModalActive} todo={todo} />
    </div>
  );
};

export default EditTodo;
