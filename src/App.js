import { useEffect, useState } from 'react';
import React from 'react'

function App() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [name, setName] = useState("");

// on every render
useEffect(() => {
console.log("I re-rendered");
});

// on first render/mount only! - componentDidMount alternative
useEffect(() => {
  console.log("The component mounted")
}, []);

// on first render + whenever dependency changes - componentDidUpdate alternative
useEffect(() => {
  console.log(`The name changed!: ${name}`);
}, [name]);

// Follows the same rules, except this handles the unmounting on a component! - componentWillUnmount alternateve
useEffect(() => {
  console.log("attach listener");
  window.addEventListener("resize", updateWindowWidth);

  return () => {
    // when component unmounts, this cleanup code runs...
console.log("detach listener");
window.removeEventListener("resize", updateWindowWidth);


  };
});

const updateWindowWidth = () => {
setWindowWidth(window.innerWidth)
};


  return (
    <div className="app">
      <center>
        <h1>The useEffect Hook</h1>
        <h2>The window width is: {windowWidth}</h2>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a name" />
      </center>
    </div>
  );
}

export default App








// import React, { useState } from 'react'
// import "./App.css"
// function App() {
//   const [todos, setTodos] = useState([]);
// const [input, setInput] = useState("");

// const addTodo = (e) => {
//   e.preventDefault(); // this prevents a refresh
// setTodos ([...todos, input]);
// setInput("");
// };

//   return (

//     <div className='App'>
//       <h1>Welcome to my TODO list</h1>

//       <form>
//       <input value={input} onChange={e => setInput(e.target.value)} type="text" />
//       <button type='submit' onClick={addTodo}>Add todo</button>
//       </form>
   

// <h2>List of Todos</h2>
// {todos.map(todo => (
//   <p>{todo}</p>
// ))}
//     </div>
//   )
// }

// export default App
