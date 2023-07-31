import listCategoryService from "../../services/category/listCategory.service.js";

const listCategoryController = async (req, res) => {
  const [status, data] = await listCategoryService();

  return res.status(status).json(data);
};
export default listCategoryController;
