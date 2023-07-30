import database from "../../database/index.js";

const updateProfileProductService = async (id, newData) => {
  let query = "UPDATE products SET ";
  const keys = Object.keys(newData);
  const values = Object.values(newData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

  const responseQuery = await database.query(query, [...values, id]);

  return [200, responseQuery.rows[0]];
};

export default updateProfileProductService;
