import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { AppRouter } from './router/AppRouter';
import greenTheme from './theme/green_theme';

const App = () => {
  return (
    <ThemeProvider theme={greenTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
