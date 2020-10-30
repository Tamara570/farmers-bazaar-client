import React from 'react'
import './ProductItem.css'



export default function ProductItem () {
    return (
        <div className="product-item-container"> 
            <div className="product-item-name"><p>item name</p></div>
            <div className="product-item-price"><p>item price</p></div>
        </div>
    )
}