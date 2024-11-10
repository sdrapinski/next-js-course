import React, { Suspense } from 'react'
import Reviews from '../components/reviews/reviews'
import Product from '../components/product/product'

const ProductDetail = () => {
  return (
    <div>
        ProductDetail
        <Suspense fallback={<p>Loading detalils</p>}> 
        <Product/>
        </Suspense>
        <Suspense fallback={<p>Loading Reviews</p>}> 
        <Reviews />
        </Suspense> 
        

    </div>
  )
}

export default ProductDetail