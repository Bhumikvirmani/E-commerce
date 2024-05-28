import React, { useContext } from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star from '../Assests/star.png'
import dullStar from '../Assests/dullStar.png'
import { ShowContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}= props;

    const{addToCart} = useContext(ShowContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img className='star 'src={star} alt=''/>
                <img className='star ' src={star} alt=''/>
                <img className='star ' src={star} alt=''/>
                <img className='star ' src={star} alt=''/>
                <img className='star ' src={dullStar} alt=''/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                <div className='productdisplay-right-prices-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                a women jacket and alll fucked up
            </div>
            <div className='productdisplay-righ-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-righ-size'>
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                    <div>Extra large</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className='productdisplay-right-categoty'><span>category:</span>women jacket</p>
        </div>
    </div>
  )
}

export default ProductDisplay

