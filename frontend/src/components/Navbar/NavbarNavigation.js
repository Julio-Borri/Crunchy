import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import navigationLinks from '../../constants/navigationLinks';

const useStyles = makeStyles(() => ({
  linksContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  socialContainer: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  links: {
    textDecoration: 'none',
    transition: 'all 1s',
    position: 'relative',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      height: '100%',
      borderBottom: '2px solid white',
      transition: 'width 0.3s ease',
      bottom: '0',
      right: '50%',
    },
    '&:hover::before, &:hover::after': {
      width: '40%',
      transition: 'width .2s ease',
    },
    '&::after': {
      left: '50%',
    },
  },
  button: {
    color: 'white',
  },
  selected: {
    '& span:first-of-type': {},
  },
}));

const NavbarNavigation = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.linksContainer}>
        {navigationLinks.map((link) => (
          <NavLink
            to={link.path}
            exact
            activeClassName={classes.selected}
            className={classes.links}
            key={link.label}
          >
            <Button className={classes.button} startIcon={link.icon}>
              {link.label}
            </Button>
          </NavLink>
        ))}
      </div>
      <div className={classes.socialContainer}>
        <a href='https://www.instagram.com/crunchy_bv/' target='_blank'>
          <IconButton className={classes.button} component='span'>
            <InstagramIcon />
          </IconButton>
        </a>
        <a href='https://www.instagram.com/crunchy_bv/' target='_blank'>
          <IconButton className={classes.button} component='span'>
            <WhatsAppIcon />
          </IconButton>
        </a>
      </div>
    </>
  );
};

export default NavbarNavigation;
