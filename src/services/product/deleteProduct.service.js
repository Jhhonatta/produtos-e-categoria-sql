import database from "../../database/index.js";

const deleteProductService = async (id) => {
  const queryResponse = database.query(
    `
        DELETE FROM products
        WHERE 
        id = $1; `,
    [id]
  );

  return {};
};

export default deleteProductService;
