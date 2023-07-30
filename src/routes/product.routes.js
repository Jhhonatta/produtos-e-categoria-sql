import { Router } from "express";

import createProductController from "../controllers/product/createProduct.controller.js";
import deleteProductController from "../controllers/product/deleteProduct.controller.js";
import listProductController from "../controllers/product/listProduct.controller.js";
import profileProductController from "../controllers/product/profileProduct.controller.js";
import updateProfileProductController from "../controllers/product/updateProfileProduct.controller.js";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware.js";
import ensureIdValidProductMiddlewares from "../middlewares/ensureIdValidProduct.middlewares.js";

import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/products.schemas.js";

const productRoutes = Router();

productRoutes.post(
  "",
  ensureDataIsValidMiddleware(createProductSchema),
  createProductController
);
productRoutes.get("", listProductController);
productRoutes.get(
  "/:id",
  ensureIdValidProductMiddlewares,
  profileProductController
);
productRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateProductSchema),
  ensureIdValidProductMiddlewares,
  updateProfileProductController
);
productRoutes.delete(
  "/:id",
  ensureIdValidProductMiddlewares,
  deleteProductController
);

export default productRoutes;
