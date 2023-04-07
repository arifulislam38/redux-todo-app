import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../../Redux/Filter/Actions";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const filters = useSelector((state) => state.filter);
  const handleTasks = () => {
    const remainingTodos = todos.filter(todo => !todo.completed);
    switch (remainingTodos.length) {
      case 0:
        return "No Task left";
      case 1:
        return "1 Task left";

      default:
        return `${todos.length} Tasks left`;
    }
  };

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  const handleColorChange = (color) => {
    const changeValue = filters.colors.includes(color);
    dispatch(colorChange(changeValue ? "remove" : "added", color));
  };

  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>{handleTasks()}</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          class={`cursor-pointer ${filters.status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          class={`cursor-pointer ${
            filters.status === "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          class={`cursor-pointer ${filters.status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
