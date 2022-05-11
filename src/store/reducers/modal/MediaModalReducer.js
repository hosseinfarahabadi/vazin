const initialState = {
  openMedia: false,
};

export default function openMediaModal(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MEDIA_MODAL":
      return {
        ...state,
        openMedia: true,
      };
    case "CLOSE_MEDIA_MODAL":
      return {
        ...state,
        openMedia: false,
      };
    default:
      return state;
  }
}
