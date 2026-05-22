const express = require('express');

const http = require('http');

const app = express();

// with the help of use we can make midlware
app.use((req, res, next ) =>{
    console.log("Came in first midlware" , req.url);
    next();

})

app.use((req,res,next) =>{
console.log("came in second mildware" , req.url);
})

const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT ,() =>{
   console.log(`Server is running on address http://localhost:${PORT}`);
})