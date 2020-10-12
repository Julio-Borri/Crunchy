import React, { useState } from 'react';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '400px',
    marginTop: theme.spacing(2),
  },
  margin: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();

  const initialState = {
    user: '',
    password: '',
    showPassword: false,
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={handleLogin}
    >
      <FormControl fullWidth className={classes.margin} variant='outlined'>
        <InputLabel htmlFor='user'>Usuario</InputLabel>
        <OutlinedInput
          id='user'
          type={'text'}
          value={values.user}
          onChange={handleChange('user')}
          labelWidth={70}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant='outlined'>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <OutlinedInput
          id='password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Button
        fullWidth
        variant='outlined'
        color='primary'
        className={classes.margin}
        type='submit'
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
