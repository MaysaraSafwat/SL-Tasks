// const express = require("express");
// const multer = require("multer");
// const zod = require("zod");
// const mongoose = require("mongoose");

// Define the schema for the products
// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
// });

// Create the products collection
// const products = mongoose.model("Products", ProductSchema);

// Define the multer configuration
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}--${file.originalname}`);
//     },
//   }),
// });

// Define the routes
// const app = express();

// app.get("/products", async (req, res) => {
//   const products = await products.find();
//   res.send(products);
// });

// app.get("/products/:id", async (req, res) => {
//   const product = await products.findById(req.params.id);
//   if (!product) {
//     res.status(404).send("Product not found");
//   } else {
//     res.send(product);
//   }
// });

// app.post("/products", upload.single("image"), async (req, res) => {
//   const product = await products.create({
//     name: req.body.name,
//     image: req.file.filename,
//     description: req.body.description,
//     price: req.body.price,
//   });
//   res.send(product);
// });

// app.put("/products/:id", upload.single("image"), async (req, res) => {
//   const product = await products.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       image: req.file.filename,
//       description: req.body.description,
//       price: req.body.price,
//     },
//     {
//       new: true,
//     }
//   );
//   if (!product) {
//     res.status(404).send("Product not found");
//   } else {
//     res.send(product);
//   }
// });

// app.delete("/products/:id", async (req, res) => {
//   await products.deleteOne({ _id: req.params.id });
//   res.sendStatus(200);
// });

// app.post("/upload", upload.single("image"), async (req, res) => {
//   const url = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//   res.send({ url });
// });

// Define the middleware to check for logged in user
// const auth = (req, res, next) => {
//   Check if the user is logged in
//   if (!req.user) {
//     res.status(401).send("Unauthorized");
//     return;
//   }

//   next();
// };

// Add the middleware to all routes
// app.use(auth);

// Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });