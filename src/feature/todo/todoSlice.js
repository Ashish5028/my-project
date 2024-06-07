import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter({
  selectId: (a) => a.id,
});
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
  todoEntity: todoAdapter.getInitialState(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      todoAdapter.addOne(state.todoEntity, todo);
    },
    deleteTodo: (state, action) => {
      //state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      todoAdapter.removeOne(state.todoEntity, action.payload);
    },
    updateTodo: (state, action) => {
      // todoAdapter.updateOne(state.todoEntity, {
      //   id: action.payload.id,
      //   changes: {
      //     text: action.payload.text,
      //     completed: action.payload.completed,
      //   },
      // });
      // todoAdapter.upsertOne(state.todoEntity, action.payload);

      // upsert alternative
      state.todoEntity.entities[action.payload.id] = action.payload;
      state.todoEntity.entities[action.payload.id].completed = true;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
