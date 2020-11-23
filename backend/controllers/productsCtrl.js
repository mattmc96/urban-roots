const Product = require("../model/Products");

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Product cannot be created"
        })
    }
    const product = new Product({
        name: req.body.name || "No Product Title",
        price: req.body.price,
        image: req.body.image,
        id: req.body.id,
        category: req.body.category
    })
    product.save()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error creating"
        })
    })
}

exports.findAll = (req, res) => {
    Product.find()
    .then((products) => {
        res.send(products)
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then((product) => {
        if(!product) {
            res.status(404).send({
                message: "Product not found with id at"
                + req.params.productId
            })
        }
        res.send(product)
    })
    .catch(err => {
        if(err.kind === "ObjectId") {
            res.status(404).send({
                message: "Product not found with id at"
                + req.params.productId
            })
        }
        return res.status(500).send({
            message: "Error"
        })
    })
}