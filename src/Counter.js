import { createContext, useContext, useState } from "react";

// 1. Create a context
const CounterContext = createContext();

// 2. Create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const Increase = () => setCount((count) => count + 1);
  const Decrease = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, Increase, Decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. Create child components to help implementing the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { Increase } = useContext(CounterContext);

  return <button onClick={() => Increase()}>{icon}</button>;
}

function Decrease({ icon }) {
  const { Decrease } = useContext(CounterContext);

  return <button onClick={() => Decrease()}>{icon}</button>;
}

// 4. Add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
