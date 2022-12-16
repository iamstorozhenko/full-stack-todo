import { createContext, useState } from "react";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Switch from "react-switch";

const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider>
      <div className="container" id={theme}>
        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <InputTodo />
        <ListTodos />
      </div>
    </themeContext.Provider>
  );
}

export default App;
