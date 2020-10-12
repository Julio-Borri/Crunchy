import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import backgroundImg from '../../assets/img/header_fondo2.jpg';
import logoImg from '../../assets/img/logo_web_blanco_ss.png';
import HeaderWave from './HeaderWave';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 50px)',
    background: `linear-gradient(
      to right,
      rgb(0,0,0,0.8),
      rgb(97, 111, 57, 0.8)), 
      url(${backgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  header: {
    width: '100%',
    maxWidth: '1000px',
    margin: 'auto',
    height: '80%',
  },
  wave: {
    width: '100%',
    height: '20%',
  },
  logoCont: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
  },
  logoImg: {
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      height: '300px',
      alignItems: 'flex-start',
    },
  },
  sloganCont: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      height: '50%',
      alignItems: 'flex-start',
    },
  },
  slogan: {
    fontFamily: `'Shadows Into Light Two', cursive`,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '3rem',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container className={classes.header}>
        <Grid item xs={12} sm={6} className={classes.logoCont}>
          <img src={logoImg} alt='Logo_Crunchy' className={classes.logoImg} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.sloganCont}>
          <Typography variant='h2' className={classes.slogan}>
            Tu snack, en la puerta de tu casa
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.wave}>
        <HeaderWave />
      </div>
    </div>
  );
};

export default Header;
