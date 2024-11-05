"use client"
import { useRouter } from 'next/navigation';
import React from 'react'


const OrderProduct = () => {
    const router = useRouter();

    const handleClick = ()=>{
        console.log("order placed");
        router.push("/")
    }
  return (
    <div>
        order page
        <button onClick={handleClick}>Order</button>
    </div>
  )
}

export default OrderProduct