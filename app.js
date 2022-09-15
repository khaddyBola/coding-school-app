const express = require('express');

const port = process.env.PORT || 4000;


const app = express();


app.use(express.json());
// app.use(express.urlencoded());

// app.use(express.static('public'))

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/', (req, res) => {
    // console.log(req.body);
    res.send('<h1>Thanks for submitting your form!</h1>');
})




app.listen(port, function() {
    console.log(`server is running at ${port})`);
})