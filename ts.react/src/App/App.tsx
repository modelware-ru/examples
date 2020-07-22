import * as React from 'react';
import Input from '../Control/Input/Input';

let index = 0;

type InputState = {
    id: number,
    disabled: boolean,
    defaultValue: string,
}

type AppState = {
    inputs: InputState[],
}

export default class App extends React.Component<any, AppState> {

    state: AppState = {
        inputs: [],
    }

    constructor(props: any) {
        super(props);
    }

    myCallback = (me: any, id: number) => {
        let i = me.getValue();
    }

    onClick = (id: number) => {
        let index = this.state.inputs.findIndex( i => i.id === id);

        if (index === -1) return;

        let inputs: InputState[] = this.state.inputs;
        inputs[index].disabled = !inputs[index].disabled

        this.setState({inputs});
    }

    onAddInput = () => {
        let inputs: InputState[] = this.state.inputs;
        inputs.push({
            id: index,
            disabled: false,
            defaultValue: index.toString(),
        });
        index++;

        this.setState({inputs});
    }

    public render() {
        return (
            <>
                <h1>HELLO, APP</h1>
                {this.state.inputs.map(item => {
                    return (
                        <div key={item.id}>
                            <Input
                                value={item.defaultValue}
                                disabled={item.disabled}
                                me={
                                    {callback: this.myCallback, id: item.id}
                                }
                            />
                            <button onClick={e => this.onClick(item.id)}>CHANGE</button>
                        </div>
                    );
                })}
                <button className='btn' onClick={e => this.onAddInput()}>Add Input</button>
            </>
        );
    }
}
