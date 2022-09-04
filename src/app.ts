const express = require("express");
require("dotenv").config();
const app = express();
import * as Colors from "colors.ts";

Colors.colors("", "");

const productRoutes = require("./routes/productRoutes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const { connectDB } = require("./config/db");

connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
