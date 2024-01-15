import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDetail, RelatedProduct } from '../models/ProductDetail'
import ProductCard from '../components/ProductCard'

type Props = {}

const Detail = (props: Props) => {

  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null)

  const param = useParams()
  const getProductDetailApi = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`
    });
    setProductDetail(res.data.content)
  }

  useEffect(() => {
    getProductDetailApi()
  }, [param.id])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">
          <img className='w-100' src={productDetail?.image} alt="..." />
        </div>
        <div className="col-9">
          <h3 className='mt-5'>{productDetail?.name}</h3>
          <p>{productDetail?.description}</p>
          {productDetail?.size.map((size) => {
            return <div className='btn btn-primary m-2' key={size}>{size}</div>
          })}
          <div>
            <button className='btn btn-dark mt-4'> Add to card <i className='fa fa-cart-plus'></i></button>
          </div>
        </div>
      </div>
      <h3>Related Products</h3>
      <div className="row">
        {productDetail?.relatedProducts.map((prod: RelatedProduct) => {
          return <div className="col-4" key={prod.id}>
            <ProductCard prod={prod} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Detail