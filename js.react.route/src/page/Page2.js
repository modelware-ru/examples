import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

export default class Page2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h1>Page 2</h1>
                <div><Link to='/page3'>Page3</Link></div>
            </Fragment>
        );
    }

}