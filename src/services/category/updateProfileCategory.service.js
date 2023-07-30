import database from "../../database/index.js";
import { AppError } from "../../errors/errors.js";

const updateCategoryService = async (id, data) => {
  const queryResponse = await database.query(
    `UPDATE categories 
          SET name = $1
          WHERE 
          id = $2
          RETURNING *;`,
    [data.name, id]
  );

  return [200, queryResponse.rows[0]];
};

export default updateCategoryService;
