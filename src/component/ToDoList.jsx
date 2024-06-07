import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, updateTodo } from "../feature/todo/todoSlice";
export default function ToDoList() {
  const todoes = useSelector((state) => state.todoEntity);
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(
      updateTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
    history.push("./updateTodo");
  };

  return (
    <>
      <h1 className="  flex justify-center text-xl ">ToDoList</h1>
      <div className=" container  mx-auto w-80  flex flex-col  justify-center items-center bg-slate-500 p-2 text-white">
        {todoes.ids.map((todoId) => {
          const todo = todoes.entities[todoId];
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                className="py-1 px-3 bg-white text-black ml-4 mt-4"
                type="button"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
              <button
                type="button"
                className="py-1 px-3 bg-white text-black ml-4 mt-4"
                onClick={handleButton}
              >
                Update
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
