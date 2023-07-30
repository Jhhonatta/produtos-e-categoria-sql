import database from "../../database/index.js";
import { AppError } from "../../errors/errors.js";

const deleteCategoryService = async (id) => {
  // if (!parseInt(id)) {
  //   throw new AppError("Id must only contain numbers", 404);
  // }

  // const searchCategoryId = await database.query(
  //   `SELECT
  //   *
  //   FROM
  //   categories
  //   WHERE
  //   id = $1
  //   `,
  //   [id]
  // );

  // if (searchCategoryId.rowCount == 0) {
  //   throw new AppError("Id invalid", 404);
  // }

  const responseQuery = database.query(
    `
        DELETE FROM categories
        WHERE 
        id = $1; `,
    [id]
  );

  return [204, responseQuery];
};

export default deleteCategoryService;
