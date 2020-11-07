import React, {} from 'react'
import './AddItemPage.css'
import  VendorContext  from '../../context/VendorContext'


export default function AddItemPage() {
    return (

        <VendorContext.Consumer>

            {value =>
                <div className="form-container">
                    
                    <form className="forms" onSubmit={value.postVendor}>
                        <div className="form">
                            <label className="vendorName--label" htmlFor="vendorName">Item img</label>
                            <div>
                                <input
                                    id="img"
                                    name="img"
                                    className="Item img--input"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorName--label" htmlFor="vendorName">Item Name</label>
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    className="Item Name--input"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorDescription--label" htmlFor="vendorPrice">Item price</label>
                            <div>
                                <input
                                    id="itemprice"
                                    name="itemprice"
                                    className="vendorDescription--itemprice"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorDescription--label" htmlFor="vendorItemCount">Item count</label>
                            <div>
                                <input
                                    id="itemcount"
                                    name="itemcount"
                                    className="vendorDescription--itemcount"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorDescription--label" htmlFor="vendorName">Item Description</label>
                            <div>
                                <input
                                    id="description"
                                    name="description"
                                    className="vendorDescription--input"
                                    type="text"
                                    maxLength="255"
                                />
                            </div>
                        </div>
                       
                      
                        <div className="form-button">
                            <button>Enter new vendor Item</button>
                        </div>

                    </form>
                </div>}

        </VendorContext.Consumer>
    )
}