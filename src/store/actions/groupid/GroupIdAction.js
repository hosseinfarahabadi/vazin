import {
  LOAD_GROUPID_LOADING,
  LOAD_GROUPID_SUCCESS,
  LOAD_GROUPID_ERROR,
} from "../groupid/GroupIdActionType";
export const loadGroupId = () => {
  return {
    type: LOAD_GROUPID_LOADING,
  };
};
export const addToGroupId = (item) => {
  return {
    type: LOAD_GROUPID_SUCCESS,
    payload: item,
  };
};
export const errorGroupId = (item) => {
  return {
    type: LOAD_GROUPID_ERROR,
    payload: item,
  };
};
