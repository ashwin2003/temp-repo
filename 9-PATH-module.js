const path = require('path')

console.log(path.sep); // this returns a '\'

const filePath = path.join('/content', 'subfolder' , 'test.txt') // this joins the paths the are sepcified here.
console.log(filePath)

const base = path.basename(filePath) // this gives us the base name of the path, here test.txt is returned as it is the base file.
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder' , 'test.txt') // this returns the absolute path of our directory and the file we are looking for.
console.log(absolute);