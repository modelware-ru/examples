import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

import App from './App';

import './asset/style/global.scss';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);