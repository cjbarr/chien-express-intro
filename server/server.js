const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let quotes =[{quote: "I said that", who: "Casie"},
{quote:"Woof Woof", who:"Corey"},
{quote:"shots take 100%", who:"M Scott"}]

console.log("This is quotes", quotes);

app.get('/quotes', function(req,res){
    console.log("in get request");
    res.send(quotes);
})


app.listen(port, ()=>{
    console.log('listening on port: ', port);
});

