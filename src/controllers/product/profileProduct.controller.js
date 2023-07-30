// import profileProductService from "../../services/profileProduct.service.js";

import profileProductService from "../../services/product/profileProduct.service.js";

const profileProductController = async (req, res) => {
  const { id } = req.params;

  const data = await profileProductService(id);

  return res.status(200).json(data);
};

export default profileProductController;
