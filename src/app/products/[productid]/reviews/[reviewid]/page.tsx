import React from 'react'

const ProductReview = ({params}:{
    params:{productid:string; reviewid:string}
}) => {
  return (
    <div>ProductReview {params.productid} {params.reviewid}</div>
  )
}

export default ProductReview