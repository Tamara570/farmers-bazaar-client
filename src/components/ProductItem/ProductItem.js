import React from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'
import VendorContext from '../../context/VendorContext'

export default function ProductItem() {
    return (
        <VendorContext.Consumer>
            {value => {
                return (
                    <>
                        {value.vendors.map(vendor =>
                            <Link key={vendor.id}
                                to={"/vendor/" + vendor.id}>
                                <div className="product-item-container">
                                    <div className="product-item-photo">
                                        <img src="https://picsum.photos/120/120" alt="food" />
                                    </div>
                                    <div className="product-item-name">
                                        <h5>{vendor.name}</h5>
                                    </div>

                                    <div className="product-item-price">
                                        <p>{vendor.itemprice}</p>
                                    </div>
                                    <div className="product-item-available">
                                        <p>{vendor.itemcount}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </>
                )
            }}
        </VendorContext.Consumer>

    );
}
