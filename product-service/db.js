const mongoose = require("mongoose");

const connectToDatabase = (tenantId) => {
    const productDBURI = `mongodb://localhost:27017/${tenantId}_products`;
    return mongoose.createConnection(productDBURI, {});
}

module.exports = connectToDatabase;