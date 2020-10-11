import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    overflow: 'hidden',
    height: '100%',
  },
  svg: {
    height: '100%',
    width: '100%',
  },
  path: {
    stroke: 'none',
    fill: '#fff',
  },
}));

const HeaderWave = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <svg
        viewBox='0 0 500 150'
        preserveAspectRatio='none'
        className={classes.svg}
      >
        <path
          d='M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z'
          className={classes.path}
        ></path>
      </svg>
    </div>
  );
};

export default HeaderWave;
