import React, { useReducer } from 'react';

const initialData = {
  name: '',
  email: '',
  city: '',
  password: '',
};

function reducer(data, action) {
  return {
    ...data,
    [action.type]: action.val,
  };
}

const UseReducerAdvance = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name here"
        onChange={(event) =>
          dispatch({ type: 'name', val: event.target.value })
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter your email here"
        onChange={(event) =>
          dispatch({ type: 'email', val: event.target.value })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your city here"
        onChange={(event) =>
          dispatch({ type: 'city', val: event.target.value })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter your password here"
        onChange={(event) =>
          dispatch({ type: 'password', val: event.target.value })
        }
      />

      <br />
      <br />

      <h2>Preview</h2>

      <ul>
        <li>Name: {state.name}</li>
        <li>Email: {state.email}</li>
        <li>City: {state.city}</li>
        <li>Password: {state.password}</li>
      </ul>
    </div>
  );
};

export default UseReducerAdvance;
