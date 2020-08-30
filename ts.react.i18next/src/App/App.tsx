import {hot} from 'react-hot-loader/root';
import * as React from 'react';

import {Translation} from 'react-i18next';
import i18next from 'i18next';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    onClick = () => {
        i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
    }

    public render() {

        return (
            <Translation ns={['translation', 'anotherTranslation']}>
                {
                    (t, {i18n}) =>
                        <>
                            <h1>{t('Welcome to React')}</h1>
                            <h3>{t('key1', 'default value 1 to show', {text: 'can you hear me'})}</h3>
                            <h3>{t('key2', 'default value 2 to show', {text1: 'text11', text2: 'text22'})}</h3>
                            <h2>Не нужно переводить</h2>
                            <h3>{t('Welcome to React1')}</h3>
                            <h3>{t('anotherTranslation:Welcome to React')}</h3>
                            <button onClick={this.onClick}>SWITCH BETWEEN&nbsp;
                                {i18n.languages.map(lang => lang + ',')}
                            </button>
                        </>
                }
            </Translation>
        );
    }
}

export default hot(App);