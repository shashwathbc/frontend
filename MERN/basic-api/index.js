const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors())

app.get("/" , (req ,  res) => {

   res.send("Hello World")
})


app.get("/notes" , (req ,  notes) => {
     const authors = [{
         text : "Shashwath",
         link: 21,
     },
     {
        text : "Darshan",
        link: 21,
    }]
    notes.json({
        notes : authors
    })
 })



app.listen(port , () => {
    console.log(`Backend app Running At :-  http://localhost:${port}`)
})