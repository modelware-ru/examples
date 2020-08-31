import * as React from 'react';
import {connect} from 'react-redux';
import * as Component4Action from "./actions";

class Component4 extends React.Component<any, any> {

    state: any = {
    }

    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <>
                <p>Component 4</p>
                <div>Value = {this.props.value}</div>
                <button onClick={this.props.action}>Component 4</button>
            </>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        value: store.component1Reducer.component4Reducer.value,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    action: () => dispatch((Component4Action.Component4Action())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component4);