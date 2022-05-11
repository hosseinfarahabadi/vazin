import {
  ADD_TO_UPDATE,
  CHANGE_BTN_FLAG,
  REMOVE_FROM_UPDATE,
} from "../updateValue/UpdateValueActionType";
export const addToUpdate = (item) => {
  return {
    type: ADD_TO_UPDATE,
    payload: item,
  };
};
export const removeFromUpdate = () => {
  return {
    type: REMOVE_FROM_UPDATE,
  };
};
export const changeBtn = (logic) => {
  return {
    type: CHANGE_BTN_FLAG,
    payload: logic,
  };
};
