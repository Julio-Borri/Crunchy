import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export const navigationLinks = [
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

export const socialLinks = [
  {
    label: 'Instagram',
    path: 'https://www.instagram.com/crunchy_bv/',
    icon: <InstagramIcon />,
  },
  {
    label: 'WhatsApp',
    path: 'https://www.instagram.com/crunchy_bv/',
    icon: <WhatsAppIcon />,
  },
];
