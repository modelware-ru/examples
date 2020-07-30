import * as React from 'react';

import * as style from './Input2.module.scss';

export default class Input2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
        }

        this.props.me && this.props.me.callback(this, this.props.me.id);

        this.onChange = this.onChange.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    getValue() {
        console.log('getValue');
        return this.state.value;
    }

    setValue (value) {
        console.log('setValue');
        this.setState({value});
    }

    onChange (e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className={style.my}>
                <input type='text' value={this.state.value} disabled={this.props.disabled || false} onChange={this.onChange}/>
            </div>
        );
    }
}
