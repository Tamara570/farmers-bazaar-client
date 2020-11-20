import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { API_ENDPOINT } from '../../config'

const defaultState = {
    items: {}
}
 
export default function ProductDetail() {
    const [state, setState] = useState(defaultState);
    let { id } = useParams();

    const getItem = () => {
        fetch(`${API_ENDPOINT}/items/${id}`)
            .then(res => res.json())
            .then(item => {
                console.log({ item })
                setState({ item })
            })
    }

    useEffect(() => {
        getItem()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src="https://picsum.photos/660/442" alt="itemphoto" />
            </div>
            <div className="product-detail-item-name-container">

                <div className="product-detail-item-name">
                    <h5>
                        {state.items.name}
                    </h5>
                </div>

                <div className="product-detail-item-price-container">
                    <div className="product-detail-item-price tag">
                        <p>${state.items.itemPrice}</p>
                    </div>
                    <div className="product-detail-item-availability tag">
                        <p>Available: {state.items.itemCount}</p>
                    </div>
                </div>
            </div>
            <div className="product-detail-item-description">
                <p>{state.items.description}</p>
            </div>
        </div>
    )
}