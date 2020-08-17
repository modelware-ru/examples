import * as React from 'react';
import {connect} from 'react-redux';
import * as Component2Action from "./actions";

class Component2 extends React.Component<any, any> {

    state: any = {
    }

    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <>
                <p>Component 2</p>
                <div>Value = {this.props.value}</div>
                <button onClick={this.props.action}>Component 2</button>
            </>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        value: store.component2Reducer.value,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    action: () => dispatch((Component2Action.Component2Action())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component2);