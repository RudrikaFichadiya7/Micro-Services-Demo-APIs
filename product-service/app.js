const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'];
  req.db = connectToDatabase(tenantId);
  req.Product = req.db.model('Product', require('./models/Product').schema);
  next();
}, productRoutes);

app.listen(3002, () => {
  console.log('Product Service listening on port 3002');
});
