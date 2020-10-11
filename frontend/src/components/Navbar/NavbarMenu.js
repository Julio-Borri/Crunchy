import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { navigationLinks, socialLinks } from '../../constants/navigationLinks';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    minHeight: '50px',
  },
  menuStyle: {
    '& .MuiPaper-root': {
      minWidth: '100vw',
      left: '0px !important',
      borderRadius: '0px',
      backgroundColor: 'rgba(255,255,255, 0.9)',
    },
  },
  links: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
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
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {navigationLinks.map((link) => (
          <MenuItem key={link.label} onClick={handleClose}>
            <NavLink to={link.path} className={classes.links}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </NavLink>
          </MenuItem>
        ))}
        {socialLinks.map((link) => (
          <MenuItem key={link.label}>
            <a
              href={link.path}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.links}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarMenu;
