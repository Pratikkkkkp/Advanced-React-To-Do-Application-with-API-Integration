import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
