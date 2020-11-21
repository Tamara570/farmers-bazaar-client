import React, { useEffect, useState } from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'
import { API_ENDPOINT } from '../../config'
import { useParams } from 'react-router-dom'

const defaultState = {
    items: {}
}

export default function ProductItem() {
    const [state, setState] = useState(defaultState);
    let { id } = useParams();

    const getItem = () => {
        fetch(`${API_ENDPOINT}/items/${id}`)
            .then(res => res.json())
            .then(item => {
                console.log({ item })
                setState({ item })
            })

    // const [items, setItems] = useState([]);
    // const getItems = () => {
    //   fetch(`${API_ENDPOINT}/items`)
    //     .then(res => res.json())
    //     console.log(items)
    //     .then(items => setItems(items));
    // };
    // useEffect(() => {
    //   getItems();
    // }, []);
     }

    useEffect(() => {
        getItem()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    console.log()
    return (
        <>
            <Link to={"/inventory/details/{state.items.id}"}>
                <div className="product-item-container">
                    <div className="product-item-photo">
                        <img src="https://picsum.photos/120/120" alt="food" />
                    </div>
                    <div className="product-item-name">
                        <h5>{state.items.name}</h5>
                    </div>

                    <div className="product-item-price">
                        <p>{state.items.itemprice}</p>
                    </div>
                    <div className="product-item-available">
                        <p>{state.items.itemcount}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
