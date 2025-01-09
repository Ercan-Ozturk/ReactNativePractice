import { create } from "zustand";
import "../global.css";
import { persist } from "zustand/middleware";
type TodoStore = {
  todo: string;
  save_todo: (label: string) => void;
  todo_array: string[];
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todo: "",
      todo_array: [],
      save_todo: (label: string) =>
        set((state) => ({
          todo: label,
          /*       todo_array: {
        ...state.todo_array,
        todo_array: [...state.todo_array, label],
      }, */
        })),
    }),
    { name: "todo-store" }
  )
);
