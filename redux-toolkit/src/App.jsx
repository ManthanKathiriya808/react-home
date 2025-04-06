

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {


  return (
    <>
  <h1 className="text-3xl font-bold  underline">
  Todo List
  </h1>
    <AddTodo/>
    <Todos/>

    </>
  )
}

export default App
