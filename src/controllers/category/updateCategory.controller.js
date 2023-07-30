// import updateCategoryService from "../../services/updateProfileCategory.service.js";
import updateCategoryService from "../../services/category/updateProfileCategory.service.js";

const updateCategoryController = async (req, res) => {
  // const bodyRequest = req.body;

  const { id } = req.params;

  const [status, data] = await updateCategoryService(id, req.validatedBody);

  return res.status(status).json(data);
};

export default updateCategoryController;
