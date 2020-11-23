const router = require("express").Router()
const productsCtrl = require("../controllers/productsCtrl")
    
router.post("/shop", productsCtrl.create)
router.get("/shop", productsCtrl.findAll)
// router.delete("/shop/:id", productsCtrl.delete)

module.exports = router