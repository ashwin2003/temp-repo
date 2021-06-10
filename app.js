const _ = require('lodash');

const items = [1,[2,[3,[4]]]] // array of arrays
const newitems = _.flattenDeep(items) // flattendeep method converts array of array into a single array.
console.log(newitems);