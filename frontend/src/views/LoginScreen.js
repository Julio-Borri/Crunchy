import { makeStyles } from '@material-ui/core';
import React from 'react';
import Login from '../components/Login';
import logoImg from '../assets/img/logo_web_negro_ss.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
  },
  logoCont: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  logoImg: {
    height: '100px',
    [theme.breakpoints.up('sm')]: {
      height: '150px',
    },
  },
}));

const LoginScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logoCont}>
        <img src={logoImg} alt='Logo_Crunchy' className={classes.logoImg} />
      </div>
      <Login />
    </div>
  );
};

export default LoginScreen;
