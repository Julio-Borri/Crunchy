import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  menuButton: {
    minHeight: '64px',
  },
  menuStyle: {
    width: '100%',
  },
  links: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    margin: '0',
  },
}));

const NavbarMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        aria-controls='menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id='menu'
        elevation={0}
        getContentAnchorEl={null}
        className={classes.menuStyle}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem>
          <NavLink to='/' className={classes.links}>
            <ListItemIcon>
              <HomeIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Inicio' />
          </NavLink>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SearchIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Productos' />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Comprar' />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarMenu;
