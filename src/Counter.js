import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  const buttonClicked = (number) => setCounter(counter + number);

  return (
    <div>
      <h3>
        {props.label} {props.emoji}
      </h3>
      <p>
        Contador: <span>{counter}</span>
      </p>
      <button onClick={() => buttonClicked(1)}>+</button>
      <button onClick={() => buttonClicked(-1)}>-</button>
    </div>
  );
}

export default Counter;
