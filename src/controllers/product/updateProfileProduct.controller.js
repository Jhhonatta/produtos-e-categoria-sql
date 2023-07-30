// import updateProfileProductService from "../../services/updateProfileProduct.service.js";

import updateProfileProductService from "../../services/product/updateProfileProduct.service.js";

const updateProfileProductController = async (req, res) => {
  const { id } = req.params;

  const newData = req.body;

  const [status, data] = await updateProfileProductService(id, newData);

  return res.status(status).json(data);
};

export default updateProfileProductController;
