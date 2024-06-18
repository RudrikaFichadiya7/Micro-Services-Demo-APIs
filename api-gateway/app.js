const express = require("express");
const httpProxy = require("express-http-proxy");

const app = express();
const userServiceProxy = httpProxy("http://localhost:3001");
const productServiceProxy = httpProxy("http://localhost:3002");

//Endpoints for the service, users and orders
app.use('/users', (req, res, next) => {
    userServiceProxy(req, res, next);
});

app.use('/products', (req, res, next) => {
    productServiceProxy(req, res, next);
});

app.listen(3000, () => {
    console.log("API Gateway is listening on port 3000");
});
