import * as React from 'react';
import SelectingFormValuesForm from './SelectingFormValuesForm';

export default class SelectingFormValuesPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return <SelectingFormValuesForm onSubmit={this.submit}/>;
    }
}