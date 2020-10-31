import React, { useReducer, useState, useEffect, useRef} from 'react';

let initialCount = 0;

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` вказує на примонтований елемент поля вводу тексту
    inputEl.current.focus();
  };

  function clickHandler() {
    dispatch({type: 'increment'})
    
  }
  function addCount() {
    setCount(count + 1);
  }




  return (
    <div>
      <h1>Зараз: {count}, а до цього: {prevCount}</h1>
      <button onClick={addCount}>
        Add cound
      </button>
      <br/>
      <p>Ви натиснули {state.count} разів</p>
      <button onClick={clickHandler}>
        Натисни мене
      </button>
      <br/>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Фокусуватись на полі вводу</button>

    </div>
  );
}


export default App;
