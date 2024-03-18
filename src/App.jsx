import { Route, Routes } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Home from "./pages/Home"
import MyNotes from "./pages/MyNotes"
import { useState } from "react"


function App() {
const [todo,setTodo] = useState ([])

  return (
    <>
      <Navbar todo={todo} />
      <Routes>
        <Route path="/" element={<Home setTodo={setTodo} />} />
        <Route path="/my-notes" element={<MyNotes todo={todo} setTodo={setTodo} />} />
      </Routes>
    </>
  )
}

export default App
