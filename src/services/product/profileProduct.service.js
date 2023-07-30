import database from "../../database/index.js";

const profileProductService = async (id) => {
  const responseQuery = await database.query(
    `SELECT * FROM products
        WHERE id = $1;`,
    [id]
  );

  return responseQuery.rows[0];
};

export default profileProductService;
