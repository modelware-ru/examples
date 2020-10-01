import * as React from 'react';
import WizardForm from './WizardForm';

export default class WizardPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <WizardForm onSubmit={this.submit}/>;
    }
}