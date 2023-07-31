import createCategoryService from "../../services/category/createCategory.service.js";

const createCategoryController = async (req, res) => {
  const data = await createCategoryService(req.validatedBody);
  return res.status(201).json(data);
};

export default createCategoryController;
