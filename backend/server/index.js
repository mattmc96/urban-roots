const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log(`is your refrigerator plugged in? cuz mine is at port ${process.env.SERVER_PORT}`)
);

// import routes
const authRoutes = require("../routes/auth");
const dashboardRoutes = require("../routes/dashboard");
const verifyToken = require("../routes/validate-token");
const productRoutes = require("../routes/product")
// require("../routes/product")(app)

app.get("/", (req, res) => {
  res.json({
    message: "Success"
  })
})

// middlewares
app.use(express.json()); // for body parser

// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/dashboard", verifyToken, dashboardRoutes);
app.use("/api/products", productRoutes)

app.listen(process.env.SERVER_PORT, () => console.log(`is your refrigerator running? cuz mine is at ${process.env.SERVER_PORT} mph`));