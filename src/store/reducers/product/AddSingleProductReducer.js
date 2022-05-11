const initialState = {
  items: [],
  loading: false,
  error: "",
};

export default function addSingleProductReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "LOAD_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "LOAD_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "REMOVE_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        items: "",
        loading: false,
      };
    case "REMOVE_COLOR":
      // const old = [...state];
      // console.log(old);
      return {
        ...state,
        // items: {
        //   ...state.items,
        //   // productColors: state.items.productColors.filter((item, index) => {
        //   //   return index !== action.payload;
        //   // }),
        //   // [state.items.productColors]: [...state.items.productColors].filter(
        //   //   (item, index) => index !== action.payload
        //   // ),
        // },
        loading: false,
      };
    default:
      return state;
  }
}
