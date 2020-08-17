import * as React from 'react';
import {connect} from 'react-redux';

export default class Component3 extends React.Component<any, any> {

    state: any = {
    }

    constructor(props: any) {
        super(props);
    }

    onClick = () => {
        this.props.onClick();
    }

    public render() {
        return (
            <>
                <p>Component 3</p>
                <div>Value = {this.props.value}</div>
                <button onClick={this.onClick}>Component 3</button>
            </>
        );
    }
}

