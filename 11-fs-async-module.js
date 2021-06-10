const {readFile , writeFile } =require('fs')  //just another way of reaching out to methods of any module. Here readFileSync , writeFileSync are methods of fs module.

 readFile('./content/first.txt','utf8', (err, result)=>{ // if you will not write ut8 the you will get the buffer value.
     if(err){
         console.log(err)
         return
     }
     const first = result;
     readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}` ,(err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log((result));
        })
     })
 })
 // in the above code first we are getting the value of 'first' using the callback function i.e result. result cannout bes used outside of the brackets where it is defines and the we are getting second value and then a new .txt file is made using write fule where the first and second is being added.
 // in asynchronous approach the code is being read after the execution of the code after the async function.