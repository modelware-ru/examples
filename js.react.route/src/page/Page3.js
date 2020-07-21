import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Page3 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>Page 3</h1>
                <div><Link to='/'>Page1</Link></div>
            </Fragment>
        );
    }

}