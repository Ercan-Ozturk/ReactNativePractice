import { create } from "zustand";
import "../global.css";
type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export function Counter() {
  const { count, inc, dec } = useStore();
  return (
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
  );
}
