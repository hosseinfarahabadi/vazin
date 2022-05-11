const initialState = {
  id: 0,
  groupName: "",
};

export default function updateValueReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_UPDATE":
      return {
        ...state,
        id: action.payload.id,
        groupName: action.payload.groupName,
      };
    case "REMOVE_FROM_UPDATE":
      return {
        ...state,
        id: 0,
        groupName: "",
      };
    case "CHANGE_BTN_FLAG":
      return {
        ...state,
        btnFlag: action.payload,
      };
    default:
      return state;
  }
}
