import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import {connect} from 'react-redux';

import * as AppAction from "./actions";
import ContactPage from "./ContactPage/ContactPage";
import SimplePage from "./Example/SimplePage";
import SyncValidationPage from "./Example/SyncValidationPage";
import FieldLevelValidationPage from "./Example/FieldLevelValidationPage";
import SubmitValidationPage from "./Example/SubmitValidationPage";
import AsyncBlurValidationPage from "./Example/AsyncBlurValidationPage";
import AsyncChangeValidationPage from "./Example/AsyncChangeValidationPage";

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
                <ContactPage/>
                <hr/>
                <SimplePage/>
                <hr/>
                <SyncValidationPage/>
                <hr/>
                <FieldLevelValidationPage/>
                <hr/>
                <SubmitValidationPage/>
                <hr/>
                {/*<AsyncBlurValidationPage/>*/}
                <hr/>
                <AsyncChangeValidationPage/>
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
