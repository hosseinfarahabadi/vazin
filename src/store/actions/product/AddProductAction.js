import {
  LOAD_PRODUCT_LOADING,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from "../product/AddProductActionType";
export const loadProduct = () => {
  return {
    type: LOAD_PRODUCT_LOADING,
  };
};
export const addToProduct = (item) => {
  return {
    type: LOAD_PRODUCT_SUCCESS,
    payload: item,
  };
};
export const errorProduct = (item) => {
  return {
    type: LOAD_PRODUCT_ERROR,
    payload: item,
  };
};
