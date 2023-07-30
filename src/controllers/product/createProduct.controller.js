// import createProductService from "../../services/createProduct.service.js";
import createProductService from "../../services/product/createProduct.service.js";

const createProductController = async (req, res) => {
  const data = await createProductService(req.validatedBody);
  return res.status(201).json(data);
};

export default createProductController;
