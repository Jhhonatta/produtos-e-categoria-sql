// import deleteProductService from "../../services/deleteProduct.service.js";
import deleteProductService from "../../services/product/deleteProduct.service.js";

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteProductService(id);

  return res.status(204).json(data);
};

export default deleteProductController;
