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
import VendorForm from './components/VendorForm/VendorForm'
import LogInPage from './Routes/LoginPage/LoginPage'
import ProductDetail from './Routes/ProductDetailPage/ProductDetail'
import HomePage from './Routes/UserHomePage/HomePage';
import BackButton from '../src/components/BackButton/BackButton';
import { AuthProvider } from './context/AuthContext';


export default class App extends React.Component {

  render() {
    return (
      <AuthProvider>
          <div className='App'>
            <Header />
            <BackButton />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/home' component={HomePage} />
              <Route exact path='/inventory' component={Inventory} />
              <Route path='/add' component={AddItemPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/vendorinfo' component={VendorForm} />
              <Route path='/login' component={LogInPage} />
              <Route path='/inventory/details/:id' component={ProductDetail} />
            </Switch>
          </div>
      </AuthProvider>
    );
  }
}
