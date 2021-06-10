// os module

const os  = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


// method returns the system uptime(for how the computer is running) in seconds,
console.log(`System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(), // tells the type of OS
    relese : os.release(), // tells the release of OS 
    totalmemory : os.totalmem(), // tells the totalmemory of the machine
    freememory : os.freemem(), // tells the free memory of the machine
}
console.log(currentOS);