import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Start extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.history.push('/welcome');
    }

    render() {
        return (
            <Fragment>
                <h1>START</h1>
                <button onClick={this.onClick}>Welcome</button>
            </Fragment>
        );
    }

}