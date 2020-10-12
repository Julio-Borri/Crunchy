import { createMuiTheme } from '@material-ui/core/styles';

const greenTheme = createMuiTheme({
  // mixins: {
  //   toolbar: {
  //     minHeight: '50px',
  //   },
  // },
  palette: {
    primary: {
      light: '#a7d129',
      main: '#616f39',
      dark: '#3e432e',
      contrastText: '#fff',
    },
  },
});

greenTheme.typography.h4 = {
  fontSize: '1.2rem',
  fontWeight: '400',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  [greenTheme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
};

export default greenTheme;
