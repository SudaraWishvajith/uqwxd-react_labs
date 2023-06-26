import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

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
  function deleteTodo(id) {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  }


  // Add the toggleComplete code here
  function toggleComplete(id) {
    let updatedTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);

  }

  // Add the submitEdits code here
  function submitEdits(id) {
    if (editingText.length > 0) {
      let updatedTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text === editingText;
        }
        return todo;
      });
      setEditingText("");
      setTodoEditing(null);
    } else {
            alert("Enter valid task");
    }
  };


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
      {todos.map((todo) =>
        <div className="todo" key={todo.id}>
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>(todo.text)</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit</button>
            ) : (
              <button onClick={setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
