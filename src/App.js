import React, { useRef, useEffect } from "react";

function App() {
  //! Create a useRef and initialize it with null
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <h1>React useRef Example</h1>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <p>Start typing, and the input will be focused automatically!!!</p>
    </div>
  );
}

export default App;

// ! useRef is a React Hook that provides a way to create mutable object that can persist across renders without causing the component to re-render when the value changes. It is commonly used to access and interact with the DOM elements directly.

// !We import useRef and useEffect from React. We create a inputRef using useRef and initialize it with null. We use the useEffect hook to focus on the input element when the component mounts ([] as the dependency array ensures that the effect runs only once when the component mounts). The ref attribute is attached to the input element, linking it to our inputRef.Now, when you render this component, the input element will be automatically focused when the component mounts. The useRef allows us to persistently reference and manipulate the input element without causing unnecessary renders.
