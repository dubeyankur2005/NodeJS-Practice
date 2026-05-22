const express =require('express');

const app = express();

// creating first midlware which show the request url
// app.use((req , res, next) =>{
//     console.log('We are in the first midlware , which show the request url' , req.url);
//     next();
    
// })

// // creating second midlware which show the request method

// app.use((req, res, next) =>{
//     console.log("We are in the second midlware ,which show the request method", req.method);
//     next();
    
// })

// // creating third midlware that returns a response

// app.use((req, res, next) =>{
//     console.log("We are in the third midlware , now the response in sended to the server")
//     res.send("<b>How dare you to come on this page </b>");
//     next();
    
// })


//

app.use(express.urlencoded ({
    extended: true
}))

// Now we adding two more midlware which handle path /, and request to contact-us page

app.get("/",(req, res, next)=>{
    console.log ("We are at the fourth midlware, this midlware handle the path /");
    res.send(`
        <form action = "/contact-us" >
        <p> this is the home Page </p>
        <p> for entiring the detail <b> Click </b> on the contact </p>
        <button type = "submit"> contact </button>
        
        `)

})

app.get("/contact-us",(req, res, nex)=>{
    console.log("We are the fift midlware, this midlware take the information");

    res.send(`
        <form action="/contact-us" method="POST">
<input type="text" name ="Enter the Name" placeholder="name">
<input type ="email" name = "Enter the email" placeholder="email">
<button type ="sumbmit"> submit </button>
        `)


})


const PORT = 3004;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

