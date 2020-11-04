import React, { } from 'react'
import './ProductDetail.css'



export default function ProductDetail() {
    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src="https://picsum.photos/660/442" alt="itemphoto" />
            </div>
            <div className="product-detail-item-name-container">

                <div className="product-detail-item-name">
                    <h5>
                        Fresh Erbs
                    </h5>
                </div>

                <div className="product-detail-item-price-container">
                    <div className="product-detail-item-price tag">
                        <p>$5.00</p>
                    </div>
                    <div className="product-detail-item-availability tag">
                        <p>Available</p>
                    </div>
                </div>
            </div>
            <div className="product-detail-item-description">
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
        </div>
    )
}