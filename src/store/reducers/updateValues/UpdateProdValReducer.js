const initialState = {
  id: 0,
  prodName: "",
  prodDefault: "",
  prodWeight: "",
  prodWeightUnit: "",
  prodColorName: [],
  prodColorCode: [],
  prodSize: "",
  prodSizeUnit: "",
  prodDetail: "",
};

export default function updateProdValReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NAME_TO_PROD_UPDATE":
      return {
        ...state,
        id: action.payload.id,
        prodName: action.payload.prodName,
      };
    case "ADD_DEFAULT_TO_PROD_UPDATE":
      return {
        ...state,
        prodDefault: action.payload.prodDefault,
      };
    case "ADD_DETAIL_TO_PROD_UPDATE":
      return {
        ...state,
        prodDetail: action.payload.prodDetail,
      };
    case "ADD_COLOR_TO_PROD_UPDATE":
      return {
        ...state,
        prodColorName: action.payload.prodColorName,
      };
    case "ADD_COLOR_CODE_TO_PROD_UPDATE":
      return {
        ...state,
        prodColorCode: action.payload.prodColorCode,
      };
    case "ADD_SIZE_TO_PROD_UPDATE":
      return {
        ...state,
        prodSize: action.payload.prodSize,
      };
    case "ADD_SIZE_UNIT_TO_PROD_UPDATE":
      return {
        ...state,
        prodSizeUnit: action.payload.prodSizeUnit,
      };
    case "ADD_WEIGHT_TO_PROD_UPDATE":
      return {
        ...state,
        prodWeight: action.payload.prodWeight,
      };
    case "ADD_WEIGHT_UNIT_TO_PROD_UPDATE":
      return {
        ...state,
        prodWeightUnit: action.payload.prodWeightUnit,
      };
    case "ADD_TO_PROD_UPDATE":
      return {
        ...state,
        id: action.payload.id,
        prodName: action.payload.prodName,
        prodDefault: action.payload.prodDefault,
        prodWeight: action.payload.prodWeight,
        prodColor: action.payload.prodColor,
        prodSize: action.payload.prodSize,
        prodDetail: action.payload.prodDetail,
      };
    case "REMOVE_FROM_PROD_UPDATE":
      return {
        ...state,
        id: 0,
        prodName: "",
        prodDefault: "",
        prodWeight: "",
        prodWeightUnit: "",
        prodColorName: "",
        prodColorCode: "",
        prodSize: "",
        prodSizeUnit: "",
        prodDetail: "",
      };
    case "CHANGE_PROD_BTN_FLAG":
      return {
        ...state,
        btnProdFlag: action.payload,
      };
    default:
      return state;
  }
}
