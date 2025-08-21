import { useState } from "react";
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (num) => setCount((prev) => prev + num);

  return (
    <div className=" flex flex-col items-center justify-center gap-8 p-10 rounded-4xl bg-stone-700">
      <p
        className={twMerge(
          "text-white text-2xl",
          count >= 5 && "text-green-500",
          count >= 50 && "text-stone-500",
          count >= 500 && "text-purple-500",
          count <= -5 && "text-red-500",
          count <= -50 && "text-orange-500",
          count <= -500 && "text-yellow-500"
        )}
      >
        {count}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => changeCount(-100)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-400 hover:bg-stone-500 drop-shadow-xl/20"
        >
          -100
        </button>
        <button
          onClick={() => changeCount(-10)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-300 hover:bg-stone-400 drop-shadow-xl/20"
        >
          -10
        </button>
        <button
          onClick={() => changeCount(-1)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-200 hover:bg-stone-300 drop-shadow-xl/20"
        >
          -1
        </button>

        <button
          onClick={() => changeCount(+1)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-200 hover:bg-stone-300 drop-shadow-xl/20"
        >
          +1
        </button>
        <button
          onClick={() => changeCount(+10)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-300 hover:bg-stone-400 drop-shadow-xl/20"
        >
          +10
        </button>
        <button
          onClick={() => changeCount(+100)}
          className="px-4 py-2 rounded-lg cursor-pointer bg-stone-400 hover:bg-stone-500 drop-shadow-xl/20"
        >
          +100
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-4 px-6 py-2 rounded-lg cursor-pointer text-white bg-stone-800  hover:bg-stone-900"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
