import * as React from 'react';
import SimpleForm from './SimpleForm';

export default class SimplePage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <SimpleForm onSubmit={this.submit}/>;
    }
}