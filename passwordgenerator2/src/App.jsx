import { useCallback, useEffect, useState } from 'react'



function App() {

  const [length,setLength] = useState(9)
  const [num,setNum] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("manthan")


  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num) str +=  "0123456789"
    if(character) str +=  "!@#$%^&*()_+"

    for(let i=1;i<=length;i++){
      let char =  Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,num,character,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,num,character,passwordGenerator])
  return (
    <>
        <div className="container fs-4 mt-5 px-5 pb-5 border">
          <h1 className='mt-5 text-center'>Password Generator</h1>
          <div className="row mt-5">
            <div className="col-9">
              <input type="text" readOnly placeholder={password} className='p-3 w-100' />
            </div>
            <div className="col">
              <button className='btn btn-success fs-4 p-3 w-100'onClick={copyPasswordToClipboard}>Copy</button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <input type="range" onChange={(e)=> setLength(e.target.value)} min={6} max={20} name="" id="" />
              <label htmlFor="" className='ms-3'>{length}</label>
            </div>
            <div className="col">
              <input type="checkbox" onClick={()=> setNum(!num)} className='fs-3' name="" id="" />
              <label htmlFor="" className='ms-3'>Number</label>
            </div>
            <div className="col">
              <input type="checkbox" onClick={()=> setCharacter(!character)} name="" id="" />
              <label htmlFor="" className='ms-3'>Character</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
