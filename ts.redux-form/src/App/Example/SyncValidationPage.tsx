import * as React from 'react';
import SyncValidationForm from './SyncValidationForm';

export default class SyncValidationPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <SyncValidationForm onSubmit={this.submit}/>;
    }
}