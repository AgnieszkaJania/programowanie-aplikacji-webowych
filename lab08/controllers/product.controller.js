const Product = require('../models/product.model');

let products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
    console.log(products);
    console.log("Get all");
  };

exports.add = (req, res) => {
  console.log(req.body);
  console.log("Added");
  const product = new Product(req.body.id, req.body.name, req.body.description, req.body.price);
  products.push(product);
  res.status(201).send(product);
}

exports.update = (req, res) => {
  const index = products.findIndex(a => a.id === req.body.id);
  if(index != -1){
    products[index].name = req.body.name;
    products[index].description = req.body.description;
    products[index].price = req.body.price;
    res.status(202).send(products);
    console.log(req.body.id);
    console.log("Upadated");
  }else{
    res.status(304).send();
  }

}

exports.delete = (req, res) => {
  console.log(req.params.id);
  const newProducts = products.filter(a => a.id != req.params.id);
  products = newProducts;
  res.status(202).send(products);
  console.log("Deleted");
}