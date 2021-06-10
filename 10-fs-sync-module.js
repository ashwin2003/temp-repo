const {readFileSync , writeFileSync} =require('fs')  //just another way of reaching out to methods of any module. Here readFileSync , writeFileSync are methods of fs module.

const first = readFileSync('./content/first.txt', 'utf-8') // Here the file is being read using the readFileSync method of fs. We have provided the path and the encoding language of the file.
const second = readFileSync('./content/second.txt', 'utf-8')// Here the file is being read using the readFileSync method of fs. We have provided the path and the encoding language of the file.
console.log(first, second); // and here the content of the two files is being displayed.


writeFileSync('./content/result-syn.txt', `Here is the result ${first}, ${second}` ) // This is also a method of fs module whichis used to override the changes in the file whose location is being specified. And if the file is not present at that location then this method will make a file there.

writeFileSync('./content/result-syn.txt', `Here is the result ${first}, ${second}`, {flag : 'a'}) // This command does the same this as above just we have added one property {flag : 'a'} which is used to append data to the file

// in synchronous approach the code is being read line by line.