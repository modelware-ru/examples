import * as React from 'react';
import FieldNormalizingForm from './FieldNormalizingForm';

export default class FieldNormalizingPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <FieldNormalizingForm onSubmit={this.submit}/>;
    }
}