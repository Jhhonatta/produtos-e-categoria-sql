import database from "../database/index.js";
import { AppError } from "../errors/errors.js";

const ensureIdValidProductMiddlewares = async (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 36) {
    throw new AppError("Id with unsupported format", 404);
  }

  const searchProductId = await database.query(
    `SELECT * FROM
    products
    WHERE
    id = $1
    `,
    [id]
  );

  if (searchProductId.rowCount == 0) {
    throw new AppError("Product not found", 404);
  }

  next();
};

export default ensureIdValidProductMiddlewares;
