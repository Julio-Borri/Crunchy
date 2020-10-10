import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeScreen from '../views/HomeScreen';
import ProductsScreen from '../views/ProductsScreen';
import ShopScreen from '../views/ShopScreen';

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
        <Route path='/'>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};
