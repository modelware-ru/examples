import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Button } from "@blueprintjs/core";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App11</h1>
                <Button intent="danger" text="button content" />
            </div>
        );
    }

}

export default hot(App);