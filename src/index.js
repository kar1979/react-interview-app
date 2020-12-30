import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7500c0',
    },
    secondary: {
      main: '#8a8a8a',
    },
    error: {
      main: '#de0707',
    },
  },
  typography: {
    h5: {
      fontWeight: 'bold'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
