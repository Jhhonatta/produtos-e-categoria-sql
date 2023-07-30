import database from "../../database/index.js";
import { AppError } from "../../errors/errors.js";

const createProductService = async (bodyRequest) => {
  const serachProduct = await database.query(
    `SELECT 
    *
    FROM
    products
    WHERE
    name = $1`,
    [bodyRequest.name]
  );

  if (serachProduct.rowCount == 1) {
    throw new AppError("message: product already exists");
  }

  const queryResponse = await database.query(
    `INSERT INTO
          products(name, price, category_id)
          VALUES
          ($1, $2, $3)
          RETURNING id, name;
          `,
    [bodyRequest.name, bodyRequest.price, bodyRequest.category_id]
  );

  return queryResponse.rows[0];
};

export default createProductService;
