import React from 'react';
import './App.css';
import './global/normalize.css'
import { Route, Switch } from 'react-router-dom'
//import PublicRoute from '../src/Utils/PublicRoute'
//import PrivateRoute from '../src/Utils/PrivateRoute'
import Header from '../src/components/Header/Header'
import Inventory from './Routes/InventoryPage/Inventory'
import LandingPage from './Routes/LandingPage/LandingPage'
import AddItemPage from './Routes/AddItemPage/AddItemPage'
import SignUpPage from './Routes/SignupPage/SignUpPage'
import LogInPage from './Routes/LoginPage/LoginPage'
import ProductDetail from './Routes/ProductDetailPage/ProductDetail'
import HomePage from './Routes/UserHomePage/HomePage';
import { API_ENDPOINT } from './config';
import TokenService from './services/TokenService';
import BackButton from '../src/components/BackButton/BackButton';
import VendorContext from './context/VendorContext';
import { AuthProvider } from './context/AuthContext';

export default class App extends React.Component {
  state = {
    vendors: [],
  };
  getItems = e => {
    fetch(`${API_ENDPOINT}/items`)
      .then(res => res.json())
      .then(vendors => this.setState({ vendors }));
  };

  componentDidMount = e => {
    this.getItems();
  };
  //  for a farmer to post a new item
  postItems = e => {
    e.preventDefault();
    const { vendor_id, name, img, description, itemCount, itemPrice } = e.target;

    const item = {
      vendor_id: vendor_id.value,
      img: img.value,
      name: name.value,
      itemCount: itemCount.value,
      itemPrice: itemPrice.value,
      description: description.value,
    };

    console.log({ item });

    return fetch(`${API_ENDPOINT}/items`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },

      body: JSON.stringify(item),
    }).then(res => {
      this.componentDidMount();
    });
  };
  render() {
    const value = {
      items: this.state.items,
      postItems: this.postItems,
      getItems: this.getItems,
    };

    return (
      <AuthProvider>
        <VendorContext.Provider value={value}>
          <div className='App'>
            <Header />
            <BackButton />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/home' component={HomePage} />
              <Route exact path='/inventory' component={Inventory} />
              <Route path='/add' component={AddItemPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/login' component={LogInPage} />
              <Route path='/inventory/details/:id' component={ProductDetail} />
            </Switch>
          </div>
        </VendorContext.Provider>
      </AuthProvider>
    );
  }
}
