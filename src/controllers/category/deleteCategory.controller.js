import deleteCategoryService from "../../services/category/deleteCategory.service.js";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  const [status, data] = await deleteCategoryService(id);

  return res.status(status).json(data);
};

export default deleteCategoryController;
