const express = require("express");
const bodyParser = require("body-parser");
const connectToDatabase = require("./db.js");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
// Will pass three arguments, first is endpoint, middleware for the database and the third one will be controller
app.use('/', (req, res, next) => {
    const tenantId = req.headers['x-tenant-id'];
    req.db = connectToDatabase(tenantId);
    req.User = req.db.model('User', require('./models/User.js').schema);
    next();
},userRoutes);

app.listen(3001, () => {
    console.log("User Service is listening on port 3001");
});