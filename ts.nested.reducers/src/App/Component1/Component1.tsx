import * as React from 'react';
import {connect} from 'react-redux';

import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import * as Component1Action from "./actions";

class Component1 extends React.Component<any, any> {

    state: any = {
    }

    constructor(props: any) {
        super(props);
    }

    onClick3 = () => {
        console.log('onClick 3');
        this.props.action3();
    }

    public render() {
        return (
            <>
                <p>Component 1</p>
                <div>Value = {this.props.value}</div>
                <button onClick={this.props.action}>Component 1</button>
                <Component2/>
                <Component3 value={this.props.component3Value} onClick={this.onClick3}/>
                <Component4/>
            </>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        value: store.component1Reducer.component1Reducer.value,
        component3Value: store.component1Reducer.component1Reducer.component3.value,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    action: () => dispatch((Component1Action.Component1Action())),
    action3: () => dispatch((Component1Action.Component3Action())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
