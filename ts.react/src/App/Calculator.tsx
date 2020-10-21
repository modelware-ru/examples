import {hot} from 'react-hot-loader/root';
import * as React from 'react';

let BoilingVerdict = (props: any) => {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

// class Calculator extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {temperature: ''};
//     }
//
//     handleChange = (e: any) => {
//         this.setState({temperature: e.target.value});
//     }
//
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input
//                     value={temperature}
//                     onChange={this.handleChange}/>
//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)}/>
//             </fieldset>
//         );
//     }
// }

class Calculator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange = (temperature: string) => {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange = (temperature: string) => {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

const scaleNames: any = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleChange = (e: any) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

let toCelsius = (fahrenheit: number) => {
    return (fahrenheit - 32) * 5 / 9;
}

let toFahrenheit = (celsius: number) => {
    return (celsius * 9 / 5) + 32;
}

let tryConvert = (temperature: string, convert: (temp: number) => number) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default hot(Calculator);