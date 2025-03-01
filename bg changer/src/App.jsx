// import { useState } from 'react'

import { useState } from 'react'


function App() {

  const [color,setColor] = useState("olive")
  

  console.log(color)
  return (
    <>
      <div className="container border w-100  " style={{height:"100vh", backgroundColor: color, width:"100%"}}>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav d-flex justify-content-evenly w-100">
        <button class="btn btn-danger px-4" onClick={()=> setColor("red")}>Red</button>
        <button class="btn btn-success px-4"onClick={()=> setColor("green")} >Green</button>
        <button class="btn btn-primary px-4" onClick={()=> setColor("blue")}>Blue</button>
        <button class="btn btn-secondary px-4" onClick={()=> setColor("grey")}>Grey</button>
        <button class="btn btn-info px-4" onClick={()=> setColor("lightblue")}>LightBlue</button>
        <button class="btn btn-warning px-4"onClick={()=> setColor("yellow")} >Yellow</button>
       
      </div>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}

export default App
