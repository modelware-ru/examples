import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Page1 extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // debugger
        this.props.history.push('/page2');
    }

    render() {
        return (
            <Fragment>
                <h1 onClick={this.onClick}>Page 1</h1>
                {/*<div><Link to='/page2'>Page2</Link></div>*/}
            </Fragment>
        );
    }

}