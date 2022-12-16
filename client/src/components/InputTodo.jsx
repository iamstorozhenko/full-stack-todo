import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch("http://localhost:4500/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }

    window.location = "/";
    // setDescription("")
  };
  return (
    <div>
      <h1>Todo-list</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type what you want"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='add__btn'>Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
