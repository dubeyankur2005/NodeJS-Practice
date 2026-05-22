// we can directly send the path in the app.use function

// ex
// app.use ([path,]callback[callback...])


const express = require('express');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get("/" ,(req , res, next)=>{
    console.log("In first midlware", req.url);

    res.send(`
        <form action ="/authenticated" method ="POST">
        
        <b>You are at the default page </b><b/>
        <br>
        <h2> Enter Password for access the next midlware        
        <input type = "password" name = "password">

        <button type ="submit"> Login </button>
        </form>
        `)
})

function checkPassword(req, res, next){
    const password = req.body.password;

    if(password === "Ankur"){
        next();
    }
    else{
        res.send(`
           <h1> Blocked ❌</h1>
           <h2> Wrong Password </h2>         
               
            `)
    }
}

app.post("/authenticated",checkPassword,(req , res)=>{
    console.log("Second midlware", req.url);
    res.send(`
         <h1>Access Granted ✅</h1>
        <h2>You are now in the next middleware</h2>
        `)

})



const PORT = 3003;
app.listen(PORT, ()=>{
    console.log(`Server is running on the address http://localhost:${PORT}`)
})