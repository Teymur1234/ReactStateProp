import React, { useState } from 'react'


const Form = ({setName, setSurname, setInfo, setAge, setGender }) => {
    return(
    <div>
    <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
    <input type="text" placeholder="Surname"onChange={(e)=>setSurname(e.target.value)} />
    <input type="text" placeholder="Info"  onChange={(e) => setInfo(e.target.value)} />
    <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
    <select  onChange={(e) => setGender(e.target.value)}>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    </div>
  )
}

export default Form
