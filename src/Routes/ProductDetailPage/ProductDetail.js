import React, {} from 'react'
import './ProductDetail.css'



export default function ProductDetail () {
    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src="" alt="" />
            </div>

            <div className="product-detail-item-name-container">

                <div className="product-detail-item-name">
                    <h4>
                        Item name
                    </h4>
                </div>

                <div className="product-detail-item-price-container">
                    <div className="product-detail-item-price">
                        <p>$$</p>
                    </div>
                    <div className="product-detail-item-availability">
                        <p>Available</p>
                    </div>
                </div>

                <div className="product-detail-item-description">
                    <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
            </div>

           
        </div>
    )
}