const initialState = {
  openForm: false,
};

export default function openModal(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        openForm: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        openForm: false,
      };
    default:
      return state;
  }
}
