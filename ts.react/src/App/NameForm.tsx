import {hot} from 'react-hot-loader/root';
import * as React from 'react';

class NameForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event: any) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event: any) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <button type="submit" value="Submit2">SUBMIT2</button>
            </form>
        );
    }
}

export default hot(NameForm);