import { Router } from "express";

import createCategoryController from "../controllers/category/createCategory.controller.js";
import listCategoryController from "../controllers/category/listCategory.controller.js";
import profileCategoryController from "../controllers/category/profileCategory.controller.js";
import updateCategoryController from "../controllers/category/updateCategory.controller.js";
import deleteCategoryController from "../controllers/category/deleteCategory.controller.js";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware.js";
import ensureIdValidCategoryMiddlewares from "../middlewares/ensureIdValidCategory.middlewares.js";

import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/categories.schemas.js";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  ensureDataIsValidMiddleware(createCategorySchema),
  createCategoryController
);
categoryRoutes.get("", listCategoryController);
categoryRoutes.get(
  "/:id",
  ensureIdValidCategoryMiddlewares,
  profileCategoryController
);
categoryRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateCategorySchema),
  ensureIdValidCategoryMiddlewares,
  updateCategoryController
);
categoryRoutes.delete(
  "/:id",
  ensureIdValidCategoryMiddlewares,
  deleteCategoryController
);

export default categoryRoutes;
