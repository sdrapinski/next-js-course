"use client"
import { clientSideFunction } from '@/utils/client-utils';
//import { serverSideFunction } from '@/utils/server-utils';
import React from 'react'

const Page = () => {
    console.log("client route");
    const clientResult = clientSideFunction()
    
    //const result = serverSideFunction()
  return (
    <div>Page
     {clientResult}
    </div>
  )
}

export default Page