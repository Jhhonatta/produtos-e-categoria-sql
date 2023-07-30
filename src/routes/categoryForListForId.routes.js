import { Router } from "express";

import categoryListForIdController from "../controllers/categoryListForId.controller.js";

const categoryListForIdRoutes = Router();

categoryListForIdRoutes.get("/category/:id", categoryListForIdController);

export default categoryListForIdRoutes;
