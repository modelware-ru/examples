import * as React from 'react';
import FieldLevelValidationForm from './FieldLevelValidationForm';

export default class FieldLevelValidationPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <FieldLevelValidationForm onSubmit={this.submit}/>;
    }
}