import { serverSideFunction } from '@/utils/server-utils'
import React from 'react'

const ServerRoutePage = () => {
    console.log("server side");
    
    const result = serverSideFunction()
  return (
    <div>ServerRoutePage
        <p>{result}</p>
    </div>
  )
}

export default ServerRoutePage