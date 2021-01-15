import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import Button from '@material-ui/core/Button';

class App extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App11</h1>
                <Button variant="contained" color="primary">Hello World</Button>
            </div>
        );
    }

}

export default hot(App);