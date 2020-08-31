import * as React from 'react';
import AsyncChangeValidationForm from './AsyncChangeValidationForm';

export default class AsyncChangeValidationPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <AsyncChangeValidationForm onSubmit={this.submit}/>;
    }
}