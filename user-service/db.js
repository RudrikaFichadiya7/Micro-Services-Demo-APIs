const mongoose = require("mongoose");

const connectToDatabase = (tenantId) => {
    const userDBURI = `mongodb://localhost:27017/${tenantId}_user`;
    return mongoose.createConnection(userDBURI, {});
}

module.exports = connectToDatabase;