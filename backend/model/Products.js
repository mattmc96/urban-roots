const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
    },
    id: {
        type: Number,
    },
    category: {
        type: String,
    },
})

module.exports = mongoose.model("Product", productSchema)

Product.create (
    {
        name: "Echeveria Laui ",
        price: 12,
        image: "https://sc02.alicdn.com/kf/HTB1m3uACgaTBuNjSszfq6xgfpXa0.jpg_350x350.jpg",
        id: 1,
        category: "Succulents"
    },
    {
        name: "Ghost Plant",
        price: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYZyzEDwsJk5jhXm7RCBHT3ZY8q_8_ituuw&usqp=CAU",
        id: 2,
        category: "Succulents"
    },
    {
        name: "Flaming Katy",
        price: 17,
        image: "https://images-na.ssl-images-amazon.com/images/I/71h%2BHzlFFOL._AC_SL1327_.jpg",
        id: 3,
        category: "Succulents"
    },
    {
        name: "Common Houseleek",
        price: 16,
        image: "https://indoorgardening.com/wp-content/uploads/2019/05/common-houseleek-succulent-for-indoor-garden.jpg",
        id: 4,
        category: "Succulents"
    },
    {
        name: "Panda Plant",
        price: 16,
        image: "https://images-na.ssl-images-amazon.com/images/I/81dZIBz4-bL._AC_SL1500_.jpg",
        id: 5,
        category: "Succulents"
    },
    {
        name: "Plush Plant",
        price: 22,
        image: "https://indoorgardening.com/wp-content/uploads/2019/05/plush-plant-succulent-for-indoor-garden.jpg",
        id: 6,
        category: "Succulents"
    },
    {
        name: "Silver Jade Plant",
        price: 22,
        image: "https://indoorgardening.com/wp-content/uploads/2019/05/silver-jade-plant-succulent-for-indoor-garden.jpg",
        id: 7,
        category: "Succulents"
    },
    {
        name: "String of Bananas",
        price: 17,
        image: "https://indoorgardening.com/wp-content/uploads/2019/05/string-of-bananas-succulent-for-indoor-garden.jpg",
        id: 8,
        category: "Succulents"
    },
    {
        name: "String of Bananas",
        price: 17,
        image: "https://indoorgardening.com/wp-content/uploads/2019/05/string-of-bananas-succulent-for-indoor-garden.jpg",
        id: 9,
        category: "Succulents"
    },
    {
        name: "Angel Wings Cactus",
        price: 21,
        image: "https://www.thespruce.com/thmb/hBpkCzvQis5HFsB5C0Uk3x2FaLY=/2372x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angel-wings-cactus-ab159de1fa074df592d01d4d6799d7c9.jpg",
        id: 10,
        category: "Cacti"
    },
    {
        name: "Rat Tail Cactus",
        price: 20,
        image: "https://www.thespruce.com/thmb/MDOCZ_eWi8nbZpVK_5T5Ro0XifM=/3450x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RatsTailCactusKaraRiley-15-81aa5cb88bfc497a8c0899fbeedac21d.jpg",
        id: 11,
        category: "Cacti"
    },
    {
        name: "African Milk Tree",
        price: 22,
        image: "https://www.thespruce.com/thmb/q0DdCrB4Gy66p3oEPphWtv6-u1w=/1414x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Euphorbiatrigona-GettyImages-1167798404-ad4ab49994284c2080d1ea48639c0446.jpg",
        id: 12,
        category: "Cacti"
    },
    {
        name: "Saguaro Cactus",
        price: 17,
        image: "https://www.thespruce.com/thmb/2jcJ16JX8doMXCYyb_83zSkDrKA=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/saguarocactus-GettyImages-506103644-9d881bd28f144ba4be61c2b32e0ff124.jpg",
        id: 13,
        category: "Cacti"
    },
    {
        name: "Old Lady Cactus",
        price: 22,
        image: "https://www.thespruce.com/thmb/QrJArmdedNRkhG4lGw8kq6KfqGQ=/1515x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-523556474-59e78cbb396e5a0010b0e7d5.jpg",
        id: 14,
        category: "Cacti"
    },
    {
        name: "Bishop's Cap",
        price: 19,
        image: "https://www.thespruce.com/thmb/ffhHT1QIP6ylMmj8B61s8YE1bys=/2127x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Bishopscap-GettyImages-470242914-b2941c8949f8415b9ff506a4896878e4.jpg",
        id: 15,
        category: "Cacti"
    },
    {
        name: "Christmas Cactus",
        price: 19,
        image: "https://www.thespruce.com/thmb/EVuh05ChWXg-KC3RzYd7y78kAuw=/3300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/christmas-cactus-4176983-8-f13c2729c1fd40d5a26c4f41ac092a5f.jpg",
        id: 16,
        category: "Cacti"
    },
    {
        name: "Barrel Cactus",
        price: 18,
        image: "https://www.thespruce.com/thmb/o89XsBZHh46y3OAJjVbolGcxTJg=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-echinocactus-indoors-1902973-05-194b5035d877427ba0cdf1ca7d579028.jpg",
        id: 17,
        category: "Cacti"
    },
    {
        name: "Fairy Castle Cactus",
        price: 20,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-997082116-1562871433.jpg?crop=0.446xw:1.00xh;0.554xw,0&resize=980:*",
        id: 17,
        category: "Cacti"
    },
    // Drop the 'urban roots' collection from the current database
    Product.db.dropCollection("products", function (err, result) {})
)

module.exports = "Product"