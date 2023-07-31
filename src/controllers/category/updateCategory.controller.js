import updateCategoryService from "../../services/category/updateProfileCategory.service.js";

const updateCategoryController = async (req, res) => {
  const { id } = req.params;

  const [status, data] = await updateCategoryService(id, req.validatedBody);

  return res.status(status).json(data);
};

export default updateCategoryController;
