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