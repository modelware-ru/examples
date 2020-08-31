const reselect = require('reselect');

console.log('example');

const shopItemsSelector = state => state.shop.items;
const taxPercentSelector = state => state.shop.taxPercent;

const subtotalSelector = reselect.createSelector(
    shopItemsSelector,
    items => items.reduce((acc, item) => acc + item.value, 0)
);

const taxSelector = reselect.createSelector(
    subtotalSelector,
    taxPercentSelector,
    (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

const totalSelector = reselect.createSelector(
    subtotalSelector,
    taxSelector,
    (subtotal, tax) => ({total: subtotal + tax})
);

let exampleState = {
    shop: {
        taxPercent: 8,
        items: [
            {name: 'apple', value: 1.20},
            {name: 'orange', value: 0.95},
        ]
    }
};

console.log(subtotalSelector(exampleState)); // 2.15
console.log(taxSelector(exampleState));     // 0.172
console.log(totalSelector(exampleState));   // { total: 2.322 }