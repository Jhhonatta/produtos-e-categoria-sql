import * as yup from "yup";

const createCategorySchema = yup.object().shape({
  name: yup.string().required(),
});

const updateCategorySchema = yup.object().shape({
  name: yup.string().required(),
});
export { createCategorySchema, updateCategorySchema };
