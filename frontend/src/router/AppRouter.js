import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeScreen from '../views/HomeScreen';
import ProductsScreen from '../views/ProductsScreen';
import ShopScreen from '../views/ShopScreen';
import LoginScreen from '../views/LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/products'>
          <ProductsScreen />
        </Route>
        <Route path='/shop'>
          <ShopScreen />
        </Route>
        <Route path='/login'>
          <LoginScreen />
        </Route>
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};
