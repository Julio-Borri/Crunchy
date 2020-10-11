import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { navigationLinks } from '../../constants/navigationLinks';

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
    alignItems: 'center',
  },
  links: {
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '2px solid transparent',
    '& button:hover': {
      backgroundColor: 'rgba(255,255,255, 0.2)',
    },
  },
  button: {
    color: 'white',
    height: '100%',
    minHeight: '46px',
  },
  selected: {
    borderBottom: '2px solid white',
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
        <a
          href='https://www.instagram.com/crunchy_bv/'
          target='_blank'
          rel='noopener noreferrer'
          className={classes.links}
        >
          <Button className={classes.button}>
            <InstagramIcon />
          </Button>
        </a>
        <a
          href='https://www.instagram.com/crunchy_bv/'
          target='_blank'
          rel='noopener noreferrer'
          className={classes.links}
        >
          <Button className={classes.button}>
            <WhatsAppIcon />
          </Button>
        </a>
      </div>
    </>
  );
};

export default NavbarNavigation;
