/* var orders = []; */

const getProducts = async (req, res) => {
/* Used to check with dummy JSON data 
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => orders = json);
  res.json({orders: orders["products"]}); */
  try {
    const products = req.Product.find();
    console.log(products)
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({message: "Exception: Product: Retrieve", data: e});
  }

};

const createProduct = async (req, res) => {
  try {
    const product = new req.Product(req.body);
    await product.save();
    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({message: "Exception: Product: Create"});
  }
  
};

module.exports = { getProducts, createProduct };
