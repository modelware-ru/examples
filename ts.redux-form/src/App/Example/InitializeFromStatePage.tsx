import * as React from 'react';
import InitializeFromStateForm from './InitializeFromStateForm';

export default class InitializeFromStatePage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <InitializeFromStateForm onSubmit={this.submit}/>;
    }
}