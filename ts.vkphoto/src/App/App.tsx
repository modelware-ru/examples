import {hot} from 'react-hot-loader/root';
import * as React from 'react';

import * as style from './App.css';

class App extends React.Component {

    public render() {
        return (
            <h1 className={style.main}>Hello</h1>
        );
    }
}

export default hot(App);