import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: red
    }
});

ReactDOM.render((
    <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Fragment>
), document.getElementById('root'));
registerServiceWorker();
