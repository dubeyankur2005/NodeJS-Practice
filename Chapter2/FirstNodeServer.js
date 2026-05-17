// making requestHanlder function sepreate
const http = require('http');

function requestHandler(req, res){
    console.log(req);
}

http.createServer(requestHandler);

// Method 2 :- 
// Making requestHandler function inside the createServer with the name using function 

const http = require('http');

http.createServer(function (req, res){
    console.log(req);
})

// Method 3 :-
// Making requestHandler function inside the createServer with the arrow function

const http = require('http');
http.createServer(req, res =>{
    console.log(req);
})
