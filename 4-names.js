//local
const secret ='super secret'

//share
const gus ='gus'
const pubba = 'pubba'

//module.exports help to use the variable/objects anywhere in the app. Here  gus and pubba can be used anywhere in the app. Also only the variable which will be in the curly braces will only be exported and here secret is not exported.
module.exports = {gus, pubba}