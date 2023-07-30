// import categoryListForIdService from "../services/categoryListForId.service.js";
import categoryListForIdService from "../services/category/categoryListForId.service.js";

const categoryListForIdController = async (req, res) => {
  const { id } = req.params;

  const data = await categoryListForIdService(id);

  return res.status(200).json(data);
};

export default categoryListForIdController;
