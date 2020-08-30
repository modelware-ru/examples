import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let resources = require('./i18n.json');

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "de",

        keySeparator: false,

        interpolation: {
            format: (value, format, lng) => {
                if (format === 'uppercase') {
                    return value.toUpperCase();
                }
                return value;
            },
            escapeValue: false
        }
    });

export default i18n;