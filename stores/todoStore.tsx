import { create } from "zustand";
import "../global.css";
import React from "react";
import TODOBox from "@/components/TODOBox";
type TodoStore = {
  todo: string;
  save_todo: (label: string) => void;
};

export const useTodoStore = create<TodoStore>()((set) => ({
  todo: "",
  save_todo: (label: string) => set((state) => ({ todo: label })),
}));

export function TODO() {
  const { todo, save_todo } = useTodoStore();
  return <TODOBox onPress={() => save_todo} />;
}
