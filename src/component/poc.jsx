import { useEffect, useState } from "react";

export default function PocContainer() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const [diff, setDiff] = useState(counter2 - counter);
  const printCounters = () => {
    console.log(counter);
    console.log(counter2);
  };

  // runs everytime
  useEffect(() => {
    console.group("runs everytime");
    printCounters();
    console.groupEnd("runs everytime");
  });

  // run only once
  useEffect(() => {
    console.group("run once");
    printCounters();
    console.groupEnd("run once");
  }, []);
 
  // runs only when counter changes
  useEffect(() => {
    setDiff(counter2 - counter);
  }, [counter, counter2]);

  return (
    <div className="mx-auto w-1/2 bg-gray-100 p-4">
      <h1 className="font-bold">Poc</h1>
      <div className="flex flex-row">
        <p>{counter2}</p> -<p>{counter}</p> = <p>{diff}</p>
      </div>
      <button
        className="p-2 mr-6 bg-slate-700"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase 1
      </button>
      <button
        className="p-2 mr-6 bg-slate-700"
        onClick={() => {
          setCounter2(counter2 - 1); // this is Async call.
        }}
      >
        Increase 2
      </button>
    </div>
  );
}
