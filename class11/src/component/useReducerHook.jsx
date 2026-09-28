import React, { useReducer } from 'react';

function reducer(count, action) {
  console.log(count, action);

  if (action.type === 'INCREMENT') {
    return count + 1;
  }

  if (action.type === 'DECREMENT') {
    return count - 1;
  }

  return count;
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{state}</h2>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
    </div>
  );
}

export default UseReducerHook;
