import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const navigationLinks = [
  {
    label: 'Inicio',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    label: 'Productos',
    path: '/products',
    icon: <SearchIcon />,
  },
  {
    label: 'Comprar',
    path: '/shop',
    icon: <ShoppingCartIcon />,
  },
];

export default navigationLinks;
