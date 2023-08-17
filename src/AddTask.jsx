import React, { useState } from 'react'

function AddTask({addTask}) {
    const [value, setvalue] = useState("")

    const addvalue = () => {
addTask(value)
setvalue("")
    }
  return (
    <>
        <div className='input-container'>
            <input type="text" className='input' placeholder='Add a New Tasks'
            value={value}
            onChange={(e)=>{
                setvalue(e.target.value)}}
            
            />

            
            <button  onClick ={addvalue} className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask