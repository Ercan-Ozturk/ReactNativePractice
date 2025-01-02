import { create } from "zustand";
import "../global.css";
type Store = {
  count: number;
  inc: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export function Counter() {
  const { count, inc } = useStore();
  return (
    <div className="flex flex-col items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
      <span className="py-2 text-white font-bold text-5xl">{count}</span>
      <div className="py-1 px-2 rounded-md border-solid border-2 border-white">
        <button className="text-white" onClick={inc}>
          one up
        </button>
      </div>
    </div>
  );
}
