import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

import Start from './page/Start';
import Welcome from './page/Welcome';
import Question from './page/Question';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>TEST</h1>
                <Switch>
                    <Route exact path='/' component={Start}/>
                    <Route path='/welcome/' component={Welcome}/>
                    <Route path='/question:id' component={Question.WrappedComponent}/>
                    <Route path='/:id' component={Question.WrappedComponent}/>
                </Switch>
            </Fragment>
        );
    }

}