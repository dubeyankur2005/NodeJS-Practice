// In this part we make server listenable


// Import the built-in http module in node.js
const http = require("http");

//Create an HTTP Server
//This callback function is executed every time a request is recieved
const server = http.createServer((req,res)=>{
    console.log(req);
})


// Start the server  on port 3000
// The Server keeps listening for incoming requests
const PORT = 3000;
server.listen(PORT,()=>{
     console.log(`Server is running http://localhost${PORT}`);
});