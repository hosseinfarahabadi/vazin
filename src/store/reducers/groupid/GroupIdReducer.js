const initialState = {
  id: "",
  loading: false,
  error: "",
};

export default function addToGroupIdReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_GROUPID_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "LOAD_GROUPID_SUCCESS":
      return {
        ...state,
        id: action.payload,
        loading: false,
      };
    case "LOAD_GROUPID_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
