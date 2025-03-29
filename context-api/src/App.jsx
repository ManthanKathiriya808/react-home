// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from './components/dashboard'
import { Products } from './components/Products'
import { Users } from './components/Users'
import Navbars from "./components/Navbars"

function App() {
  

  return (
      <>
  <Navbars/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={ <Products/>} />
          <Route path="/users" element={ <Users/>} />
        </Routes>
        
       
       
      </>
  )
}

export default App
