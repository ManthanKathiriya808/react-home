import { useState,useCallback,useEffect,useRef } from 'react'

// import './App.css'

function App() {

  const [length,setLenght] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  // use ref hook start

    const passwordRef  = useRef(null)
  // use ref hook end
    const passwordGenerator = useCallback(() =>{

      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()_+"

      for(let i=1; i<=length;i++){
        let char = Math.floor(Math.random() * str.length +1)
// console.log(str.charAt(char))
        pass += str.charAt(char)

      }

      setPassword(pass)

    },[length,numAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
// use effect start
    
useEffect(()=>{
  passwordGenerator()
}, [length,numAllowed,charAllowed,passwordGenerator])



// use effect end
  return (
    <>
      <h1 className='text-center  mt-5'>Password Generator</h1>
      <div className="container px-5">
        <div className="box bg-secondary p-5 mt-5">
         <div className="row ">
          <div className="col-10  pe-0">
          <input type="text" className="w-100 px-4 py-3 me-0  pe-0 fw-bolder fs-4 " readOnly placeholder={password}  ref={passwordRef}/>
          </div>
          <div className="col ps-0">
            <button className='btn btn-primary ms-0  h-100  px-5 ' onClick={copyPasswordToClipboard}>Copy</button>
          </div>
         </div>

         <div className="row  mt-5">
          <div className="col d-flex align-items-center ">
            <input type="range" min={6} max={30} value={length} onChange={(e)=> setLenght(e.target.value)}/>
            <label className='fs-5 ms-2 text-warning fw-bolder'>Length: {length}</label>
          </div>
          <div className="col">
            <input type="checkbox" name="" defaultChecked={numAllowed} id="numberInput"  onClick={()=> setNumAllowed(!numAllowed)} />
            <label className='fs-5 ms-2 text-warning fw-bolder'>Numbers</label>
            
          </div>
          <div className="col ">
            <input type="checkbox"  name="" defaultChecked={numAllowed} id="charInput" onClick={()=> setCharAllowed(!charAllowed)} />
            <label className='fs-5 ms-2 text-warning fw-bolder'>Character</label>
            
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
