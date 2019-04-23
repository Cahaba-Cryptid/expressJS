const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// })

app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(req.url);
    next()
});

app.post('/sweepstakes-form', (req, res, next) => {
    let formData = {
        name: req.body.name,
        email: req.body.email
    }
    let jsonFormData = JSON.stringify(formData);

    console.log(req.body.name);
    console.log(req.body.email);

    fs.appendFileSync('formSubmissions.json',jsonFormData)
    next();    



    res.send('Zorg Corp thanks you for surrendering your information...');
});



app.listen(3000, () => console.log('Heard that!')); 