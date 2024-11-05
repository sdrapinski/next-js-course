import React from 'react'

const getRandomNumber = (count:number) =>{
  return Math.floor(Math.random()*count)
}


const ProductReview = ({params}:{
    params:{productid:string; reviewid:string}
}) => {

  const num = getRandomNumber(2)
if(num===1){
  throw new Error("ups")
}

  return (
    <div>ProductReview {params.productid} {params.reviewid}</div>
  )
}

export default ProductReview