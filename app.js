const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
    console.log('request');
});

app.get("/", (request, response, next) => {
    // console.log(request);
    response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html");
});

