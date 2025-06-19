import { useState } from 'react'
import './App.css'

function TodoApp() {
const DUMMY_DATA = [{id: Date.now(), title: "Take out the trash", dueDate: "10/20/2025"}]
const [todos, setTodos] = useState(DUMMY_DATA)

function addTodo(todo) {
  console.log(todo)
    const newTodo = {
      id: Date.now(),
      title: todo.inputValue,
      dueDate: todo.dateValue
    }
    setTodos(prev => [...prev, newTodo])
}

function deleteTodo(itemId) {
  const newTodo = todos.filter(todo => todo.id != itemId)
  setTodos(newTodo)
}

  return (
  <div>
    <h1>Mini Todo</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

function TodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      if (inputValue.trim() && dateValue) {
        
        addTodo({inputValue, dateValue})
      }
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add a Todo</h2>
        <input type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
        />
        <h3>Due Date:</h3>
        <input type="date" 
        onChange={(e) => setDateValue(e.target.value)} />
        <button>Add it!</button>
      </form>
    )
  }

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((item) => 
        <TodoItem key={item.id} item={item} deleteTodo={deleteTodo}/>     
      )}
      
    </ul>
  )
}

function TodoItem({ item, deleteTodo }) {
  return (
    <li>
      Title: {item.title} <br/>
      Due: {item.dueDate}
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </li>
    )
  }

function App() {
  return (
    <>
    <TodoApp />
    </>
  )
}
export default App
