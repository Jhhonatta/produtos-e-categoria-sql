import database from "../../database/index.js";

const listProductService = async () => {
  const queryResponse = await database.query(`SELECT * FROM products;`, []);

  return [200, queryResponse.rows];
};

export default listProductService;
