import { useState } from "react";
import NavBar from "./component/navBar";
import PocContainer from "./component/poc";
import TodoList from "./component/todo";
import ToDoList from "./component/ToDoList";
import TodoInput from "./component/todoInput";
import { BrowserRouter } from "react-router-dom";
import UpdateTodo from "./component/Update";

export default function App() {
  const [color, setColor] = useState("red", "green", "blue");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    console.log("handleDelete");
    setTodos((a) => {
      return a.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  const handleAdd = () => {
    setTodos(() => {
      return;
    });
    setTodos((e) => {
      return [...e, todo];
    });
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="./upload" element={<UpdateTodo />} />
          <NavBar />
          {/* <TodoList /> */}
          <TodoInput />
          <br />

          <ToDoList />
        </Routes>
      </BrowserRouter>
      {/* <PocContainer /> */}
      {/* <div className=" container flex justify-center min-h-[80vh] w-1/3  ml-96 bg-violet-200 mt-8 ">
        <div className="addtodo">
          <h1 className="font-semibold text-xl p-4 "> Add a Item</h1>
          <h1 className="text-xl">my text color is {color} </h1>
          <div className=" ">
            <input
              placeholder="Enter Item"
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-60 s"
            ></input>
            <button
              type="button"
              onClick={handleAdd}
              className="bg-violet-500 hover:bg-violet-800 border border-black text-sm text-white p-2 ml-4 mx-6 rounded-md"
            >
              Add
            </button>
          </div>
          <h1 className="font-semibold text-xl"> Your Todos</h1>
          <div className="todos">
            {todos.map((item, index) => {
              return (
                <div className=" flex justify-between w-72 m-2">
                  <input type="checkbox"></input>
                  <p className="text-xl"> {item}</p>

                  <button
                    type="button"
                    key={index}
                    className="bg-red-400 p-2 border border-black rounded-md hover:bg-red-800 "
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
}
