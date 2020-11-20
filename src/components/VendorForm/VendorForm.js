import React from 'react'


export default function VendorForm () {
  
        return (
            <form className='js-login-form' action='#' onSubmit={(e) => this.handleSubmit(e)}>
             
                    <div className='form-group'>
                        <label for="address">Street Address</label>
                        <input
                            type="text"
                            placeholder="Enter street address"
                            name="address"
                            id="address"
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label for="city">City</label>
                        <input
                            type="text"
                            placeholder="Enter City"
                            name="city"
                            id="city"
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label for="state">State</label>
                        <input
                            type="text"
                            placeholder="Enter State"
                            name="state"
                            id="state"
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label for="zip">Zip code</label>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            name="address"
                            id="address"
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label for="number">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter Contact Number"
                            name="address"
                            id="address"
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label for="hours">Hours of Business</label>
                        <input
                            type="text"
                            placeholder="Hours of Business"
                            name="address"
                            id="address"
                            required
                        />
                    </div>
    
                    <div className='form-controls'>
                        <button type="submit">Submit</button>
                    </div>
            </form>
        )   
    }

