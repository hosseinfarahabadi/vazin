import {
  LOAD_SINGLE_PRODUCT_LOADING,
  LOAD_SINGLE_PRODUCT_SUCCESS,
  LOAD_SINGLE_PRODUCT_ERROR,
  REMOVE_SINGLE_PRODUCT_ERROR,
  REMOVE_COLOR,
} from "../product/AddSingleProductAtionType";
export const loadSinleProduct = () => {
  return {
    type: LOAD_SINGLE_PRODUCT_LOADING,
  };
};
export const addToSinleProduct = (item) => {
  return {
    type: LOAD_SINGLE_PRODUCT_SUCCESS,
    payload: item,
  };
};
export const errorSinleProduct = (item) => {
  return {
    type: LOAD_SINGLE_PRODUCT_ERROR,
    payload: item,
  };
};
export const removeSinleProduct = () => {
  return {
    type: REMOVE_SINGLE_PRODUCT_ERROR,
  };
};
export const removeColor = () => {
  return {
    type: REMOVE_COLOR,
  };
};
