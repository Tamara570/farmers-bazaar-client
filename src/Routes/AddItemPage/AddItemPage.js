import React, {} from 'react'
import './AddItemPage.css'



export default function AddItemPage () {
    return (
        <div class="add-item">
            <h3>Add new Item:</h3>
            <section class="new-item">
                <p> <img src="add.jpg" alt="" /> -- Item name -- price</p>
            </section>
            <p class="description"><b>Item description</b>:<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            <button>Submit</button>
        </div>
    )
}