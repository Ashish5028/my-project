import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
export default function TodoInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <form onSubmit={handleAdd}>
          <input
            type="text"
            className="h-10 w-50 bg-slate-500 text-white py-1 px-3 rounded-md "
            placeholder="Enter a todo.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 ml-2 rounded-md  "
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
