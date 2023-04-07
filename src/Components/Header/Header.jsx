import React, { useState } from "react";
import tickImage from "../../assets/images/double-tick.png";
import notesImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import cancelImage from "../../assets/images/cancel.png";
import { useDispatch } from "react-redux";
import { added, allComplted, clearComplete } from "../../Redux/Todo/Actions";

function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const allCompleteHandler = () => {
    return dispatch(allComplted())
  };

  const clearCompleteHandler = () => {
    return dispatch(clearComplete())
  };

  const todoAddHandler = (e) => {
    e.preventDefault();
    dispatch(added(text))
    setText('')
  }
  return (
    <div>
      <form
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={todoAddHandler}
      >
        <img src={notesImage} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={text}
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li
          class="flex space-x-1 cursor-pointer"
          onClick={() => allCompleteHandler()}
        >
          <img class="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          class="flex space-x-1 cursor-pointer"
          onClick={() => clearCompleteHandler()}
        >
          <img class="w-4 h-4" src={cancelImage} alt="Complete" />
          <span>Clear Completed</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
