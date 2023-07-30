// import listProductService from "../../services/listProduct.service.js";
import listProductService from "../../services/product/listProduct.service.js";

const listProductController = async (req, res) => {
  const [status, data] = await listProductService();
  res.status(status).json(data);
};

export default listProductController;
