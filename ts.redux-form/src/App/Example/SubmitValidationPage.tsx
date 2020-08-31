import * as React from 'react';
import SubmitValidationForm from './SubmitValidationForm';

export default class SubmitValidationPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <SubmitValidationForm onSubmit={this.submit}/>;
    }
}