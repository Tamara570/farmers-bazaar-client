import React from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'

export default function ProductItem() {
    return (
        <>
            <Link to="/details">
                <div className="product-item-container">
                    <div className="product-item-photo">
                        <img src="https://picsum.photos/120/120" alt="food" />
                    </div>
                    <div className="product-item-name">
                        <h5>Fresh Erbs Mixed</h5>
                    </div>

                    <div className="product-item-price">
                        <p>$5.00</p>
                    </div>
                    <div className="product-item-available">
                        <p>1 unit</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
