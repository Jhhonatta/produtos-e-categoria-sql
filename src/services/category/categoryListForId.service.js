import database from "../../database/index.js";
import { AppError } from "../../errors/errors.js";

const categoryListForIdService = async (id) => {
  const responseQuery = await database.query(
    `
        SELECT products.name,
        products.price,
        categories.name as category
        FROM products 
        JOIN
        categories 
        ON
        categories.id = products.category_id
        WHERE
        categories.id = $1;
        `,
    [id]
  );

  if (responseQuery.rows.length <= 0) {
    throw new AppError(
      "Non-existent category or category without registered products."
    );
  }

  return responseQuery.rows;
};

export default categoryListForIdService;
