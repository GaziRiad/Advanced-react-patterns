// Compound component is very usefull for building things Like: Modal windows, pagination, tables etc..

import Counter from "./Counter";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      />

      <Counter>
        <Counter.Count />
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Label>My super flexible counter</Counter.Label>
      </Counter>
    </div>
  );
}
