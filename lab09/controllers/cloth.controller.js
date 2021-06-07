const Cloth = require('../models/cloth.model');

let clothes = [];

exports.getAll = (req, res) =>{
    res.status(200).send(clothes);
    console.log(clothes);
    console.log("Get all clothes");
};

exports.add = (req, res) => {
    console.log(req.body);
    console.log("Cloth added");
    const cloth = new Cloth(req.body.id, req.body.type,req.body.features,req.body.material, req.body.price);
    clothes.push(cloth);
    res.status(201).send(cloth);
};

exports.update = (req, res) => {
    const index = clothes.findIndex(a => a.id === req.body.id);
    if(index != -1){
        clothes[index].type = req.body.type;
        clothes[index].features = req.body.features;
        clothes[index].material = req.body.material;
        clothes[index].price = req.body.price;
        res.status(202).send(clothes);
        console.log(req.body.id);
        console.log("Clothes upadated");
    }else{
        res.status(304).send();
    }
};

exports.delete = (req,res)=>{
    console.log(req.params.id);
    const newClothes = clothes.filter(a => a.id != req.params.id);
    clothes = newClothes;
    res.status(202).send(clothes);
    console.log("Clothes deleted");
};