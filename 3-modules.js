//Modules
//CommonJS , every fine is module (by default)
// Modules - Encapsulated Code (only share minimumu)


// the names are store in './4-names'
// the function is stored in './5-utils'
// and these both are called here in this file and are executed.
const names = require('./4-names') // require is used to import what ever is exported from './4-names' here.
const sayhi = require('./5-utli') // require is used to import sayHi function which is exported from './5-utils' here.
//the function imported can be stored with different name.
const data = require('./6-alternative-flavor')



// console.log(data)
// console.log(names)

// sayhi('Ashwin')
// sayhi(names.gus) // to use gus here we need to use it via names as gus and pubba both are stored in names.
// sayhi(names.pubba)

require('./7-mind-grenade') // here the addValues function will be executed even without storing it in a variable as in './7-mind-grenade' it is already called and here we have called the file using require.