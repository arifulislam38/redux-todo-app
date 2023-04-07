import React from "react";
import { useDispatch } from "react-redux";
import { colorSelected, removed, toggled } from "../../../Redux/Todo/Actions";
import cancelImage from "../../../assets/images/cancel.png";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const cancelHandler = (todoId) => {
    return dispatch(removed(todoId));
  };

  const colorHandler = (todoId, color) => {
    return dispatch(colorSelected(todoId, color))
  };

  const toggleHandler = (todoId) => {
    return dispatch(toggled(todoId))
  };
  return (
    <div class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        class="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
        onClick={() => toggleHandler(todo.id)}
      >
        <input type="checkbox" class="opacity-0 absolute rounded-full" />
        <svg
          class={`${
            !todo.completed && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div class={`select-none flex-1 ${todo.completed && "line-through"}`}>
        {todo.text}
      </div>

      <div
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo.color === "green" && "bg-green-500"
        }`}
        onClick={() => colorHandler(todo.id, "green")}
      ></div>

      <div
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo.color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => colorHandler(todo.id, "yellow")}
      ></div>

      <div
        class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo.color === "red" && "bg-red-500"
        }`}
        onClick={() => colorHandler(todo.id, "red")}
      ></div>

      <img
        src={cancelImage}
        class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => cancelHandler(todo.id)}
      />
    </div>
  );
};

export default Todo;
