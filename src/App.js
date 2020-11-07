import React from 'react';
import './App.css';
import './global/normalize.css'
import { Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Inventory from './Routes/InventoryPage/Inventory'
import LandingPage from './Routes/LandingPage/LandingPage'
import AddItemPage from './Routes/AddItemPage/AddItemPage'
import SignUpPage from './Routes/SignupPage/SignUpPage'
import LogInPage from './Routes/LoginPage/LoginPage'
import ProductDetail from './Routes/ProductDetailPage/ProductDetail'
import HomePage from './Routes/UserHomePage/HomePage';
import { API_ENDPOINT } from './config'
import TokenService from './services/TokenService'

import VendorContext from './context/VendorContext'
import { AuthProvider } from './context/AuthContext';


export default class App extends React.Component {

  state = {
    vendors: []
  }
  getVendors = e => {
    fetch(`${API_ENDPOINT}/vendors`)
      .then(res => res.json())
      .then(vendors => this.setState({ vendors }))
  }

  componentDidMount = e => {
    this.getVendors()
  }
 
  postVendor = e => {
    e.preventDefault()
    const img = e.target.img.value
    const name = e.target.name.value
    const itemcount = e.target.description.value
    const itemprice = e.target.description.value
    const description = e.target.description.value
    const vendor = {img, name, itemcount, itemprice, description }
    fetch(`${API_ENDPOINT}/vendors`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': "application/json"
      },

      body: JSON.stringify(vendor)
    })
      .then(res => {
        this.componentDidMount()
      })
  }
  render() {

    const value = {
      vendors: this.state.vendors,
      postVendor: this.postVendor,
      getVendors: this.getVendors
    }

  

    return (
      <AuthProvider>
      <VendorContext.Provider value={value}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={HomePage} />
            <Route path='/inventory' component={Inventory} />
            <Route path='/add' component={AddItemPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/login' component={LogInPage} />
            <Route path='/details' component={ProductDetail} />
          </Switch>
        </div>
        </VendorContext.Provider>
      </AuthProvider>
    );
  }
}