import { create } from "zustand";
import { persist } from "zustand/middleware";
import "../global.css";
import React from "react";
type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
  todo: string;
  save_todo: (label: string) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      count: 0,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      todo: "",
      save_todo: (label: string) => set((state) => ({ todo: label })),
    }),
    {
      name: "count-store",
    }
  )
);

export function Counter() {
  const { count, inc, dec } = useStore();
  return (
    <>
      <div className="flex flex-col items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        <span className="py-2 text-white font-bold text-5xl">{count}</span>
        <div className="flex flex-row items-center justify-center gap-1">
          <button
            className="px-5 rounded-md border-solid border-2 border-white w-1/2
             text-white font-bold text-center"
            onClick={inc}
          >
            +
          </button>

          <button
            className="px-5 rounded-md border-solid border-2
           border-white w-1/2 text-white font-bold text-center"
            onClick={dec}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
