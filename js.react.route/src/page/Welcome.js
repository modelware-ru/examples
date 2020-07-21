import React, {Component, Fragment} from 'react';

export default class Page extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // this.props.history.push('/question/1');
        this.props.history.push('/question1');
    }

    render() {
        return (
            <Fragment>
                <h1>Welcome!</h1>
                <button onClick={this.onClick}>Questions</button>
            </Fragment>
        );
    }
}