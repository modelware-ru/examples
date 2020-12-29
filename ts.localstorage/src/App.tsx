import {hot} from 'react-hot-loader/root';
import * as React from 'react';

class App extends React.Component<any, any> {

    state: any = {
        messageList: [],
    }

    constructor(props: any) {
        super(props);

        window.addEventListener('storage', () => {
            let data = JSON.parse(localStorage.getItem('data') as string);
            if (data) {
                let {messageList} = this.state;
                messageList.push('new value: ' + data.value);
                this.setState({messageList});
            }
        });
    }

    componentDidMount() {
        // let appWindows = JSON.parse(localStorage.getItem('appWindows') as string);
        //
        // if (!appWindows) {
        //
        // }
        //
        // let x = window.open('https://www.yandex.ru', 'YANDEX');

        let {messageList} = this.state;
        messageList.push('I am ready');
        this.setState({messageList});
    }

    sendMessage() {
        let data = JSON.parse(localStorage.getItem('data') as string);

        if (data) {
            data.value++;
        } else {
            data = {value: 1};
        }
        localStorage.setItem('data', JSON.stringify(data));

    }

    render() {
        const {messageList} = this.state;

        return (
            <div>
                <h1>Application</h1>
                <button onClick={this.sendMessage}>SEND MESSAGE</button>
                <ul>
                    {messageList.map((item: any, index: number) => {
                        return (
                            <li key={index}>{item}</li>
                        );
                    })
                    }
                </ul>
            </div>
        );
    }

}

export default hot(App);