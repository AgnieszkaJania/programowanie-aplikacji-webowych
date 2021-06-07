const mongoose = require('mongoose');

const Cloth = mongoose.model('Cloth',
new mongoose.Schema({
    name:String,
    features:String,
    material: String,
    price:Number
}),
);