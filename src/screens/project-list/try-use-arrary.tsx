import { useState } from "react";

const TestTs = () => {
  const list: Array<{ name: string }> = [
    {
      name: "jack",
    },
    {
      name: "kill",
    },
  ];
  const { add, value, remove, clear } = useArray(list);
  return (
    <div>
      <button onClick={() => add({ name: "j1" })}>add</button>
      <button
        onClick={() => {
          remove(0);
        }}
      >
        remove0
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        clear
      </button>
      <ul>
        {value.map((it) => {
          return <li>{it.name}</li>;
        })}
      </ul>
    </div>
  );
};

function useArray<T>(list: T[]) {
  const [value, setValue] = useState<T[]>(list);
  const add = (o: T) => {
    setValue(value.concat(o));
  };
  const remove = (index = 0) => {
    setValue((val) => val.filter((_, i) => i !== index));
  };
  const clear = () => {
    setValue([]);
  };
  return { value, add, remove, clear };
}
export default TestTs;
