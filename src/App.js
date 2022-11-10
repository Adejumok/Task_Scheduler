import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const fetchServerTodos = await fetchTodos();
      setTodos(fetchServerTodos);
    };

    getTodos();
  }, []);

  const fetchTodos = async () => {
    const rst = await fetch("http://localhost:9000/todos");
    const data = await rst.json();

    return data;
  };

  const addTodo = async (todo) => {
    const id = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const newTodo = await id.json();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:9000/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main">
      <Header onAddModal={setShowAddTodoModal} showNew={showAddTodoModal} />
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={deleteTodo} />
      ) : (
        <h2>This Task Scheduler is Empty</h2>
      )}
      {showAddTodoModal && <NewTodo onAdd={addTodo} />}
    </div>
  );
};

export default App;
