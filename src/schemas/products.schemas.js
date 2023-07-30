import * as yup from "yup";

const createProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number().positive().required(),
});

const updateProductSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  category_id: yup.number().positive().integer(),
});

export { createProductSchema, updateProductSchema };
