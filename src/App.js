import React, {  } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
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
      <header className="App-header">
        <h1>Farmer's Bazaar</h1>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/landing' component={LandingPage} />
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
