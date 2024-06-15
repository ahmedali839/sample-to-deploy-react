import  express  from "express"; 

const app = express()   

// app.get("/", (req, res) => { 
//   res.send("Server is ready the ahmed")  
// }); 
  
// gets jokes: 
app.get("/api/jokes", (req ,res) => {
    const jokes = [
        { 
            id: 1,
            title: "this is 1 joke",
            content: "This is 1 content and 1 joke",
        },
        { 
            id: 2,
            title: "this is 2 joke",
            content: "This is 2 content and 1 joke",
        },
        { 
            id: 3,
            title: "this is 3 joke",
            content: "This is 3 content and 1 joke",
        },
        { 
            id: 4,
            title: "this is 4 joke",
            content: "This is 4 content and 1 joke",
        },
        { 
            id: 5,
            title: "this is 4 joke",
            content: "This is 4 content and 1 joke",
        },
    ];
    res.send(jokes);
});



const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log(`Serve at http://localhost:${port}`) 
})