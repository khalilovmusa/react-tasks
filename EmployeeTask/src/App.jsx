import './App.css'
import Employee from './Employee';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); 
  const [btnState, setBtnState] = useState(false)


   useEffect(()=>{
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood').then((res) =>
       { return res.json()}).then((data) => {
        let updatedData = data.map((item) => { return {...item, isAlive: item.id > 3} })
        setData(updatedData)
      })
  },[])

  // const filterFunc = (e) => {
  //   console.log(e.target.innerText)
  //   let newData = e.target.innerText === "Alive" ? data.filter((item) => item.isAlive === true) : data.filter((item) => item.isAlive === false)
  //   setData(newData)
  // }

  return (
    <>
      
      {
        data?.filter(item=>item.isAlive === btnState).map(item=>{
          return  <Employee key={item.id} {...item}/>
        })
      }
      
      <button onClick={() => setBtnState(true) } >Alive</button>
      <button onClick={() => setBtnState(false)} >Dead</button>
    </>
  )
}

export default App
