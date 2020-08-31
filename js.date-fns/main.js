const datefns = require('date-fns');
const datefnsLocale = require('date-fns/locale');
const datefp = require('date-fns/fp');

console.log(datefns.format(new Date(), 'MM/dd/yyyy'));

const dates = [new Date(1995, 6, 2), new Date(1987, 1, 11), new Date(1989, 6, 10)];
console.log(dates.sort(datefns.compareAsc));

console.log(datefns.formatDistance(datefns.subDays(new Date(), 3), new Date()));


console.log(datefns.formatDistance(
    new Date(2016, 7, 1),
    new Date(2015, 0, 1),
    {locale: datefnsLocale.eo}
));

console.log(datefns.format(new Date(), 'EEEE d', {
    locale: datefnsLocale.eo,
}));

console.log(datefns.format(new Date(), 'EEEE d'));

const addFiveYears = datefp.addYears(5);
const dateToString = datefp.formatWithOptions({ locale: datefnsLocale.eo }, 'd MMMM yyyy');

const dates2 = [
    new Date(2017, 0 /* Jan */, 1),
    new Date(2017, 1 /* Feb */, 11),
    new Date(2017, 6 /* Jul */, 2)
];

console.log(dates2.map(addFiveYears).map(dateToString).toString().toUpperCase());