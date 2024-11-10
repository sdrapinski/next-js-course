"use client"
import React, { useState } from 'react'

const Dashboard = () => {
    const [name, setname] = useState("")
    console.log("client");
    
  return (
    <div>
        <div>Client Component</div>
        <input type="text" value={name} onChange={e=>setname(e.target.value)} />
        <span>hello {name}</span>
    </div>
  )
}

export default Dashboard