import { BTN_DISABLE } from "../productBtnDisable/ProdBtnActionType";
export const prodBtnDisable = (bool) => {
  return {
    type: BTN_DISABLE,
    payload: bool,
  };
};
