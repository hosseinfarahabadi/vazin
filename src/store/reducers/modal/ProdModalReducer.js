const initialState = {
  open: false,
};

export default function openProdModal(state = initialState, action) {
  switch (action.type) {
    case "OPEN_PROD_MODAL":
      return {
        ...state,
        open: true,
      };
    case "CLOSE_PROD_MODAL":
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
