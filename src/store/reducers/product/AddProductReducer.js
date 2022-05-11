const initialState = {
  items: [],
  loading: false,
  error: "",
};

export default function addProductReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PRODUCT_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "LOAD_PRODUCT_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "LOAD_PRODUCT_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
