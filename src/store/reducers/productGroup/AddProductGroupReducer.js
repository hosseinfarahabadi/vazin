const initialState = {
  items: [],
  loading: false,
  error: "",
};

export default function addProductGroupReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_PRODUCT_GROUP_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "LOAD_PRODUCT_GROUP_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "LOAD_PRODUCT_GROUP_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
