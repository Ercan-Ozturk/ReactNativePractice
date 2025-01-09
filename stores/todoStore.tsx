import { create } from "zustand";
import "../global.css";

type TodoStore = {
  todo: string;
  save_todo: (label: string) => void;
  todo_array: string[];
};

export const useTodoStore = create<TodoStore>()((set) => ({
  todo: "",
  save_todo: (label: string) => set((state) => ({ todo: label })),
  todo_array: [],
}));
