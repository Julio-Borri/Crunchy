import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    minHeight: '50px',
    paddingTop: '5px',
  },
  crunchy: {
    fontFamily: `'Anton', sans-serif`,
    fontSize: '1.5rem',
    color: '#fff',
  },
  snacks: {
    fontFamily: `'Shadows Into Light Two', cursive`,
    fontSize: '1rem',
    color: '#fff',
    position: 'absolute',
    top: '27px',
    left: '29px',
  },
}));

const LogoText = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <span className={classes.crunchy}>CRUNCHY</span>
      <span className={classes.snacks}>snacks</span>
    </div>
  );
};

export default LogoText;
