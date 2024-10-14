
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import React, { useState } from 'react';

function App() {
  const [editingTodo, setEditingTodo] = useState("");

  return (
    <>
      <h1 className='font-extrabold text-2xl'>Redux toolkit concept</h1>
      <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
      <Todos setEditingTodo={setEditingTodo} />
    </>
  );
}

export default App;
