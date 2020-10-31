import React, {  } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
import Header from '../src/components/Header/Header'
import Inventory from './Routes/InventoryPage/Inventory'
import LandingPage from './Routes/LandingPage/LandingPage'
import AddItemPage from './Routes/AddItemPage/AddItemPage'
import SignUpPage from './Routes/SignupPage/SignUpPage'
import LogInPage from './Routes/LoginPage/LoginPage'
import ProductDetail from './Routes/ProductDetailPage/ProductDetail'
import HomePage from './Routes/UserHomePage/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar />
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
  );
}

export default App;
