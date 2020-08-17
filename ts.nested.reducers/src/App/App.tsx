import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import {connect} from 'react-redux';

import Component1 from "./Component1/Component1";
import * as AppAction from "./actions";

class App extends React.Component<any, any> {

    state: any = {
    }

    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <>
                <h1>HELLO, APP</h1>
                <div>Value App = {this.props.value}</div>
                <button onClick={this.props.action}>App</button>
                <Component1/>
            </>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        value: store.appReducer.value,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    action: () => dispatch((AppAction.AppAction())),
});

export default connect(mapStateToProps, mapDispatchToProps)(hot(App));
