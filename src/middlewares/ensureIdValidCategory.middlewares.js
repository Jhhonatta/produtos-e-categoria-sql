import database from "../database/index.js";
import { AppError } from "../errors/errors.js";

const ensureIdValidCategoryMiddlewares = async (req, res, next) => {
  const { id } = req.params;

  if (!parseInt(id)) {
    throw new AppError("Id must only contain numbers", 404);
  }

  const searchCategoryId = await database.query(
    `SELECT * FROM
    categories
    WHERE
    id = $1
    `,
    [id]
  );

  if (searchCategoryId.rowCount == 0) {
    throw new AppError("Category not found", 404);
  }

  next();
};

export default ensureIdValidCategoryMiddlewares;
