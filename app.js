const express = require("express");
const cors = require("cors");
const productsRoutes = require("./api/products/routes");
const connectDB = require("./database");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

// Routes
app.use("/products", productsRoutes);
app.use("/shops", shopsRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`"Server is working on: ${PORT}"`);
  connectDB();
});
