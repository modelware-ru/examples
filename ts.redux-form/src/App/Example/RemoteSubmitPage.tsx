import * as React from 'react';
import RemoteSubmitForm from './RemoteSubmitForm';
import RemoteSubmitButton from "./RemoteSubmitButton";

export default class RemoteSubmitPage extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return (
            <>
                <RemoteSubmitForm/>
                <RemoteSubmitButton/>
            </>
        );
    }
}