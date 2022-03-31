import "./App.css";
import { useState, useEffect } from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";

function App() {
  const Url = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState();

  const FetchApi = async () => {
    const res = await fetch(Url);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Practicando Fetch(proceso) </h1>
      <ul>
        {!todos
          ? "Cargando..."
          : todos.map((todos, index) => {
              return (
                <li key={index}>
                  {todos.title}{" "}
                  {todos.completed ? <FcCheckmark /> : <FcCancel />}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default App;
