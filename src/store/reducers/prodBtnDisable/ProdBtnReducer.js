const initialState = {
  flag: true,
};
export default function prodBtnDisable(state = initialState, action) {
  switch (action.type) {
    case "BTN_DISABLE":
      return {
        ...state,
        flag: action.payload,
      };
    default:
      return state;
  }
}
