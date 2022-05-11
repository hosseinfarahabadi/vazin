import {
  LOAD_PRODUCT_GROUP_SUCCESS,
  LOAD_PRODUCT_GROUP_ERROR,
  LOAD_PRODUCT_GROUP_LOADING,
} from "../productGroup/AddProductGroupType";

export const loadProdctGroup = (item) => {
  return {
    type: LOAD_PRODUCT_GROUP_LOADING,
    payload: item,
  };
};
export const errorProductGroup = (item) => {
  return {
    type: LOAD_PRODUCT_GROUP_ERROR,
    payload: item,
  };
};
export const addToProductGroup = (item) => {
  return {
    type: LOAD_PRODUCT_GROUP_SUCCESS,
    payload: item,
  };
};
