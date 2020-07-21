import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Page1 from './page/Page1';
import Page2 from './page/Page2';
import Page3 from './page/Page3';

export default class App_ extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App1</h1>
                <Switch>
                    <Route path='/page2'>
                        <Page2/>
                        <p>with additional data 1</p>
                    </Route>
                    <Route path='/page3' component={Page3}/>
                    {/*<Route exact path='/' component={Page1}/>*/}
                    <Route exact path='/'>
                        <Page1/>
                    </Route>
                    <Route path='/page2'>
                        <p>with additional data 2</p>
                    </Route>

                </Switch>
            </div>
        );
    }

}