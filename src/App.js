import React, { useState } from 'react'
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const addTodo = (e) => {
  e.preventDefault(); // this prevents a refresh
setTodos ([...todos, input]);
setInput("");
};

  return (

    <div className='App'>
      <h1>Welcome to my TODO list</h1>

      <form>
      <input value={input} onChange={e => setInput(e.target.value)} type="text" />
      <button type='submit' onClick={addTodo}>Add todo</button>
      </form>
   

<h2>List of Todos</h2>
{todos.map(todo => (
  <p>{todo}</p>
))}
    </div>
  )
}

export default App
