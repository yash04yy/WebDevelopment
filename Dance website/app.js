const express = require("express");
const path = require("path");
const { urlencoded } = require("body-parser");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ContactDance', { useNewUrlParser: true, useUnifiedTopology: true });


//Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    concern: String,
    elaboration: String
});
const contact = mongoose.model('contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get("/contact", (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post("/contact", (req, res) => {
        var myData = new contact(req.body);
        myData.save().then(() => {
                res.send("This item is saved to database");
            }).catch(() => {
                res.status(400).send("Item wasnt sent to the database");
            })
            // res.status(200).render('contact.pug', params);
    })
    // START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});