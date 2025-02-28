// import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

function App() {

  let myObj = {
    username: "manthan",
    age:21
  }

  let arr = [1,2,3,4,5]

  return (
    <>
      <Card channel="chainAurCode" btnText = "clickME" thisobj = {myObj} myArr = {arr}/>
      <Card channel="manthan" btnText = "VisitME" thisobj = {myObj} myArr = {arr}/>
    
    </>
  )
}

export default App
