import React, {Component, Fragment} from 'react';

import classNames from 'classnames';

import * as style from './App.css';
import setting from './setting.json';

import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            gapiLoaded: false,
        };

        this._initGapi = this._initGapi.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        window.initGapi = this._initGapi;
        const el = document.createElement('script');
        el.type = 'text/javascript';

        const libraries = 'places';
        const callback = 'window.initGapi';
        el.src = `https://maps.googleapis.com/maps/api/js?key=${setting.google_api_key}&libraries=${libraries}&callback=${callback}`;

        el.async = true;
        el.id = 'gapi';
        document.getElementsByTagName('head')[0].appendChild(el);
    }

    _initGapi() {
        console.log('GAPI loaded');
        this.setState({gapiLoaded: true});
    }

    handleChange(address) {
        console.log(address);
        this.setState({address});
    }

    handleSelect(address) {
        this.setState({address});
        // geocodeByAddress(address)
        //     .then(results => getLatLng(results[0]))
        //     .then(latLng => console.log('Success', latLng))
        //     .catch(error => console.error('Error', error));
    }

    render() {
        return (
            <div className={style.main}>
                <h1>App</h1>
                {this.state.gapiLoaded &&
                <PlacesAutocomplete
                    value={this.state.address}
                    shouldFetchSuggestions={this.state.address.length > 0}
                    highlightFirstSuggestion={true}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    searchOptions={{
                        types:['(cities)']
                    }}
                >
                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Ваш город',
                                    className: style['location-search-input'],
                                    // dropdown: true,
                                    // dropdownOpened: suggestions.length > 0,
                                })}
                            />
                            <div className={classNames(style['autocomplete-dropdown-container'], suggestions.length === 0 ? 'hidden' : '')}>
                                {/*{loading && <div>Loading...</div>}*/}
                                {suggestions.map(suggestion => {
                                    const className = classNames(suggestion.active
                                        ? style['suggestion-item--active']
                                        : '', style['suggestion-item']);
                                    // inline style for demonstration purpose
                                    const styleW = suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style: styleW,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                }
            </div>
        );
    }

}