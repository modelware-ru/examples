import {hot} from 'react-hot-loader/root';
import * as React from 'react';

class App extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App1</h1>
            </div>
        );
    }

}

export default hot(App);