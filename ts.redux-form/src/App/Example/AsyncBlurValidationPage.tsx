import * as React from 'react';
import AsyncBlurValidationForm from './AsyncBlurValidationForm';

export default class AsyncBlurValidationPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <AsyncBlurValidationForm onSubmit={this.submit}/>;
    }
}