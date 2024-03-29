import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductModel } from '../models/Model'
import { RelatedProduct } from '../models/ProductDetail'

type Props = {
    prod?: ProductModel | RelatedProduct
}

const ProductCard = ({ prod }: Props) => {
    return (
        <div className='card'>
            <img src={prod?.image} alt="..." />
            <div className="card-body">
                <h3>{prod?.name}</h3>
                <p>${prod?.price}</p>
                <NavLink to={`/detail/${prod?.id}`} className='btn btn-dark'>
                    View details
                </NavLink>
            </div>
        </div>
    )
}

export default ProductCard