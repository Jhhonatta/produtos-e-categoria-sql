// import profileCategoryService from "../../services/profileCategory.service.js";
import profileCategoryService from "../../services/category/profileCategory.service.js";

const profileCategoryController = async (req, res) => {
  const { id } = req.params;

  const data = await profileCategoryService(id);

  return res.status(200).json(data);
};

export default profileCategoryController;
