import { combineReducers } from "redux";
import addProductReducer from "./product/AddProductReducer";
import openModal from "./modal/ModalReducer";
import addProductGroupReducer from "./productGroup/AddProductGroupReducer";
import updateValueReducer from "./updateValues/UpdateValueReducer";
import addToGroupIdReducer from "./groupid/GroupIdReducer";
import openProdModal from "./modal/ProdModalReducer";
import updateProdValReducer from "./updateValues/UpdateProdValReducer";
import prodBtnDisable from "./prodBtnDisable/ProdBtnReducer";
import addSingleProductReducer from "./product/AddSingleProductReducer";
import openMediaModal from "./modal/MediaModalReducer";
import uploadedImage from "./upload/UploadImageReducer";

const reducers = combineReducers({
  productList: addProductReducer,
  productGroup: addProductGroupReducer,
  updateValue: updateValueReducer,
  groupId: addToGroupIdReducer,
  openModal: openModal,
  openProdModal: openProdModal,
  updateProdVal: updateProdValReducer,
  prodBtnDisable: prodBtnDisable,
  singleProd: addSingleProductReducer,
  openMediaModal: openMediaModal,
  uploadedImages: uploadedImage,
  //other reducers come here...
});

export default reducers;
