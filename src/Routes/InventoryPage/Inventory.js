import React, { } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import './inventory.css'
import Search from '../../components/SearchBar/Search'


export default function Inventory() {
    return (
        <>
            <Search/>
            <div className="inventory-page-container">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    )
}