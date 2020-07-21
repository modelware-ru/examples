import React, {Component, Fragment} from 'react';

import * as style from './App.css';
import Select from 'react-select';
import {Scrollbars} from 'react-custom-scrollbars';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
    {value: 'vanilla1', label: 'Vanilla1'},
    {value: 'vanilla2', label: 'Vanilla2'},
    {value: 'vanilla3', label: 'Vanilla3'},
    {value: 'vanilla4', label: 'Vanilla4'},
    {value: 'vanilla5', label: 'Vanilla5'},
];

export default class App extends Component {

    constructor(props) {
        super(props);

        // this.customStyles = {
        //     control: (provided, state) => ({
        //         ...provided,
        //         width: 200,
        //         height: 37,
        //     }),
        //     indicatorSeparator: () => {
        //         width: 0
        //     },
        //     dropdownIndicator: (provided, state) => {
        //         console.log(provided);
        //         return {...provided, padding: 0,};
        //     },
        // }

        this._menuRenderer = this._menuRenderer.bind(this);
    }

    _menuRenderer(params) {
        const menu = Select.defaultProps.menuRenderer(params);

        const scrollBarProps = {
            autoHeight: true,
            renderTrackVertical: props => (
                <div {...props} className='Select-scrollbar-track'></div>
            ),
            renderThumbVertical: props => (
                <div {...props} className='Select-scrollbar-thumb'></div>
            )
        };

        return (
            <Scrollbars {...scrollBarProps}>
                {menu}
            </Scrollbars>
        );
    };

    render() {
        return (
            <div className={style.main}>
                <h1>App</h1>
                <Select options={options} searchable={false} clearable={false}/>
            </div>
        );
    }

}