import database from "../../database/index.js";

const listCategoryService = async () => {
  const queryResponse = await database.query(
    `
        SELECT * FROM categories;
        `,
    []
  );

  return [200, queryResponse.rows];
};

export default listCategoryService;
