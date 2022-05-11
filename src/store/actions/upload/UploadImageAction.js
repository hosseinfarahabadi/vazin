import { UPLOADED_IMAGE } from "../upload/UploadImageActionType";
export const uploadedImage = (imgUrl) => {
  return {
    type: UPLOADED_IMAGE,
    payload: imgUrl,
  };
};
