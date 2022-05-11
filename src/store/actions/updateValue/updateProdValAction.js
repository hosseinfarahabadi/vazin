import {
  ADD_NAME_TO_PROD_UPDATE,
  ADD_DEFAULT_TO_PROD_UPDATE,
  ADD_DETAIL_TO_PROD_UPDATE,
  ADD_COLOR_TO_PROD_UPDATE,
  ADD_COLOR_CODE_TO_PROD_UPDATE,
  ADD_SIZE_TO_PROD_UPDATE,
  ADD_SIZE_UNIT_TO_PROD_UPDATE,
  ADD_WEIGHT_TO_PROD_UPDATE,
  ADD_WEIGHT_UNIT_TO_PROD_UPDATE,
  CHANGE_PROD_BTN_FLAG,
  REMOVE_FROM_PROD_UPDATE,
} from "../updateValue/updateProdValActionType";

export const addToProdUpdate = (item) => {
  return {
    type: ADD_NAME_TO_PROD_UPDATE,
    payload: item,
  };
};

export const addDetailToProd = (item) => {
  return {
    type: ADD_DETAIL_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addColorToProd = (item) => {
  return {
    type: ADD_COLOR_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addColorCodeToProd = (item) => {
  return {
    type: ADD_COLOR_CODE_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addSizeToProd = (item) => {
  return {
    type: ADD_SIZE_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addSizeUnitToProd = (item) => {
  return {
    type: ADD_SIZE_UNIT_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addWeightToProd = (item) => {
  return {
    type: ADD_WEIGHT_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addWeightUnitToProd = (item) => {
  return {
    type: ADD_WEIGHT_UNIT_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addNameToProd = (item) => {
  return {
    type: ADD_NAME_TO_PROD_UPDATE,
    payload: item,
  };
};
export const addDefaultToProd = (item) => {
  return {
    type: ADD_DEFAULT_TO_PROD_UPDATE,
    payload: item,
  };
};
export const removeFromProdUpdate = () => {
  return {
    type: REMOVE_FROM_PROD_UPDATE,
  };
};
export const changeProdBtn = (logic) => {
  return {
    type: CHANGE_PROD_BTN_FLAG,
    payload: logic,
  };
};
