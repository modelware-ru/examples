import * as React from 'react';

import * as style from './Input.module.scss';

type Props = {
    disabled?: boolean,
    value?: string,
    me?: {
        callback: (me: any, id: number) => void,
        id: number,
    }
};

type State = {
    value: string,
};

export default class Input extends React.Component<Props, State> {

    state: State = {
        value: this.props.value || '',
    }

    constructor(props: Props) {
        super(props);

        this.props.me && this.props.me.callback(this, this.props.me.id);
    }

    getValue = () => {
        console.log('getValue');
        return this.state.value;
    }

    setValue = (value: string) => {
        console.log('setValue');
        this.setState({value});
    }

    onChange = (e: any) => {
        this.setState({value: e.target.value});
    }

    public render() {
        return (
            <div className={style.my}>
                <input type='text' value={this.state.value} disabled={this.props.disabled || false} onChange={this.onChange}/>
            </div>
        );
    }
}
