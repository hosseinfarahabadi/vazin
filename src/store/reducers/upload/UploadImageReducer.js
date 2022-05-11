const initialState = {
  images: [],
};

export default function uploadedImage(state = initialState, action) {
  switch (action.type) {
    case "UPLOADED_IMAGE":
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
}
