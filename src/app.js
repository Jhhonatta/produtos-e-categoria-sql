import "express-async-errors";

import express from "express";

import categoryRoutes from "./routes/category.routes.js";
import categoryListForIdRoutes from "./routes/categoryForListForId.routes.js";
import productRoutes from "./routes/product.routes.js";

import { errorHandler } from "./errors/errors.js";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/products", categoryListForIdRoutes);

app.use(errorHandler);

export default app;
