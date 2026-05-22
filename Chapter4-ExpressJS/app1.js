// NOTE :- In express there is no need of require http because the developer of the express they already wrote code for http in express function 



// const http = require('http');

const express = require('express');

const app = express();

app.use((req , res, next)=>{
    console.log("came in first midlware" , req.url);
    res.send("we welcome you");

    
})

// const server = http.createServer(app);

const PORT = 3003;
app.listen(PORT , ()=>{
    console.log(`Server is listening on address http://localhost:${PORT}`);

})
