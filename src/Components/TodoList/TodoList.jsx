import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo/Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const filters = useSelector((state) => state.filter);

  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.length === 0 && "No task left"}
      {todos
        .filter((todo) => {
          switch (filters.status) {
            case "Incomplete":
              return !todo.completed;
            case "Complete":
              return todo.completed;
            default:
              return true;
          }
        })
        .filter((todo) => {
          if (filters.colors.length > 0) {
            return filters.colors.includes(todo?.color);
          } else {
            return true;
          }
        })
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
