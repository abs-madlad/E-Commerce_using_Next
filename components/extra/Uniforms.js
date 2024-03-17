import React from 'react'
import ProductCard from '../body/ProductCard'
import productData from '../body/productData'

const Uniforms = () => {
  return (
    <div>
        <div>
            <div className=''>
                {productData.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Uniforms