const express = require('express');
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// Built-in Middleware
app.use(express.static(staticPath))

// Template engine route
app.get("/", (req, res) => {
    res.render('index', {
        channelName: 'CM',
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/gallery", (req, res) => {
    res.render("gallery");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/about/*", (req, res) => {
    res.render("404",{
        errorcomment:"Opps page this about us page coundn't be found"
    });
});
app.get("*", (req, res) => {
    res.render("404",{
        errorcomment:"Opps page coundn't be found"
    });
});

app.listen(3000, () => {
    console.log("Server is running");
});