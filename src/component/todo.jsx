import { useEffect, useState } from "react";

export default function TodoList() {
  // var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // console.log(ar.find((c) => c == 8));
  // console.log(ar.reduce((a, b) => a + b));
  // ar = ar.map((c) => c * c);

  // console.log(ar);

  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let size = arr.length;
  //single element
  // let a =arr[0];
  // arr[0]= arr[size-1];
  // arr[size-1] = a;

  //for multiple elements
  // for (let i = 3; i < size / 2; i++) {
  //   let a = arr[i];
  //   arr[i] = arr[size - 1 - i];
  //   arr[size - 1 - i] = a;
  // }
  // console.log(arr);

  const [todoList, setTodoList] = useState([]);

  const notCompletedList = todoList.filter((todo) => !todo.completed);
  const completedList = todoList.filter((todo) => todo.completed);

  const handleAdd = () => {
    setTodoList([
      ...todoList,
      {
        title: "todo item",
        completed: false,
        id: todoList.length,
      },
    ]);
  };

  const onClickItem = (id, completed = false) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.completed = completed;
    setTodoList([...todoList]);
  };

  const RenderItem = ({ item, index, completed = false }) => {
    return (
      <div
        className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer border"
        onClick={() => {
          onClickItem(item.id, completed);
        }}
        key={index}
      >
        {item.title} ({index}) -- [{item.id}]
      </div>
    );
  };
  const RenderItems = ({ title = "List items", list, completed = false }) => {
    return (
      <>
        <h2 className=" p-4 bg-gray-200 font-bold text-lg">{title}</h2>
        {list.map((item, index) => {
          return <RenderItem completed={completed} index={index} item={item} />;
        })}
        <br />
      </>
    );
  };

  return (
    <>
      <div className="w-1/2 mx-auto py-6 ">
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 mb-2 py-1 bg-blue-600 rounded text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>

        <RenderItems list={notCompletedList} completed={true} />
        <RenderItems list={completedList} title={"Completed items"} />
      </div>
    </>
  );
}
