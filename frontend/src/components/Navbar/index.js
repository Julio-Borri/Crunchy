import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import LogoText from '../LogoText';
import NavbarNavigation from './NavbarNavigation';
import NavbarMenu from './NavbarMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'linear-gradient(to right, #5a3f37, #2c7744)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  navigationGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  menuGrid: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6} sm={3} className={classes.logoGrid}>
              <LogoText />
            </Grid>
            <Grid item sm={9} className={classes.navigationGrid}>
              <NavbarNavigation />
            </Grid>
            <Grid item xs={6} className={classes.menuGrid}>
              <NavbarMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
