import React from 'react'
import { Metadata } from 'next'

type Props = {
  params:{
    productid:string
  }
}

export const generateMetadata = ({params}:Props):Metadata=>{
return {
  title:`product ${params.productid}`
}
}

const ProductDetails = ({params}:Props) => {
  return (
    <div>ProductDetails {params.productid}</div>
  )
}

export default ProductDetails