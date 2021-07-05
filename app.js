const express = require('express');
const fs = require('fs');
const app = express();
const port = 8000;
const path = require('path');

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('public'));
app.use(express.urlencoded())


app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the directory as views


app.get('/', (req, res) =>{
    const params = {'title': 'Sameep`s website is the best'}
    res.status(200).render('home.pug', params);   //render used because we are using template's
})

app.get('/contact', (req, res) =>{
    const titl = {'title': 'My best Website'}
    res.status(200).render('contact.pug', titl);   //render used because we are using template's
})

app.post('/contact', (req, res) => {
    let outputis =  `I am ${req.body.name} from ${req.body.address} my phone number is ${req.body.phone} and email id is ${req.body.email}...my views are${req.body.desc}`;
    fs.writeFileSync('output.txt', outputis);
    const parmas = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('contact.pug', parmas);
})

//START THE SERVER
app.listen(port, () =>{
    console.log(`This application started succesfully on port number ${port}`);
})  