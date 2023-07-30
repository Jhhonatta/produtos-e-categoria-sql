import database from "../../database/index.js";
import { AppError } from "../../errors/errors.js";

const createCategoryService = async (data) => {
  const searchCategory = await database.query(
    `SELECT * FROM
    categories
    WHERE
    name = $1
    `,
    [data.name]
  );

  if (searchCategory.rowCount == 1) {
    throw new AppError("message: category already exists");
  }

  const queryResponse = await database.query(
    `INSERT INTO
    categories(name)
    VALUES
    ($1)
    RETURNING *;
    `,
    [data.name]
  );

  return queryResponse.rows[0];
};

export default createCategoryService;
