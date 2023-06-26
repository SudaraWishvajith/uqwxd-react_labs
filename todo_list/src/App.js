import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  // Add the handlesubmit code here
  function handlesubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert("Enter valid Task");
      setTodo("");
    }

  }

  // Add the deleteToDo code here


  // Add the toggleComplete code here


  // Add the submitEdits code here


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" align="right"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter new Task"
          value={todo} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default App;
