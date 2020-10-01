import * as React from 'react';
import FieldArraysForm from './FieldArraysForm';

export default class FieldArraysPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <FieldArraysForm onSubmit={this.submit}/>;
    }
}