import React, { useEffect, useState } from "react";
import "../css/manager.css";
import { Formik } from "formik";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../../store/actions/product/AddProductAction";
// import Axios from "../../Api/Axios";
import axios from "axios";
import {
  addColorCodeToProd,
  addColorToProd,
  addDefaultToProd,
  addDetailToProd,
  addNameToProd,
  addSizeToProd,
  addSizeUnitToProd,
  addToProdUpdate,
  addWeightToProd,
  addWeightUnitToProd,
  changeProdBtn,
} from "../../../store/actions/updateValue/updateProdValAction";

import { v4 as uuidv4 } from "uuid";
import {
  addToSinleProduct,
  removeColor,
} from "../../../store/actions/product/AddSingleProductAtion";
import DeleteColorApi from "../services/DeleteColorApi";
let colorArr = [];
function ProdForm() {
  const [color, setColor] = useState(true);
  const [size, setSize] = useState(true);
  const [weight, setWeight] = useState(true);
  const addProduct = useSelector((state) => state.productList);
  const updateProdValue = useSelector((state) => state.updateProdVal);
  const groupId = useSelector((state) => state.groupId);
  const images = useSelector((state) => state.uploadedImages.images);
  const singleProduct = useSelector((state) => state.singleProd.items);
  const [colorState, setColorState] = useState([]);
  const [colorFlag, setColorFlag] = useState(false);
  const [sizeState, setSizeState] = useState([]);
  const [sizeFlag, setSizeFlag] = useState(false);
  const [weightState, setWeightState] = useState([]);
  const [weightFlag, setWeightFlag] = useState(false);
  const [valueUpdate, setValueUpdate] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [coloDisable, setColoDisable] = useState(true);
  const [sizeDisable, setSizeDisable] = useState(true);
  const [weightDisable, setWeightDisable] = useState(true);
  const [imageObj, setimageObj] = useState([]);
  const dispatch = useDispatch();
  const baseUrl = "http://188.121.121.198:93/api";
  const colorRedux = singleProduct.productColors;
  // console.log(colorRedux);
  useEffect(() => {
    // getProduct(groupId.id);
  }, []);
  // get product  from server
  const getProduct = async (id) => {
    try {
      dispatch({ type: "LOAD_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product/GetBy/${id}`);
      // console.log(res);
      dispatch(addToProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  // get single product  from server

  const getSingleProduct = async (id) => {
    try {
      dispatch({ type: "LOAD_SINGLE_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product/${id}`);
      dispatch(addToSinleProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteColorProduct = async (id) => {
    try {
      await axios.delete(`${baseUrl}/ProductColors/${id}`).then((res) => {
        getSingleProduct(singleProduct.id);
        dispatch(addToSinleProduct(res));
      });
    } catch (err) {
      console.log(err);
    }
  };
  // post product  to server
  const postProduct = async (values) => {
    const guid = uuidv4();
    try {
      const res = await axios
        .post(`${baseUrl}/product`, {
          id: guid,
          groupId: groupId.id,
          name: values.prodName,
          defaultValue: values.prodDefault,
          description: values.prodDetail,
          productColors: values.prodColors,
          productSizes: values.prodSizes,
          productWeights: values.prodWeights,
        })
        .then(() => {
          getProduct(groupId.id);
          getSingleProduct(guid);
        });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  // update product group to server
  const updateProduct = async () => {
    try {
      const res = await axios
        .put(`${baseUrl}/product`, {
          id: updateProdValue.id,
          groupId: groupId.id,
          name: updateProdValue.prodName,
          defaultValue: updateProdValue.prodDefault,
          productColors: colorRedux,
        })
        .then(() => {
          getProduct(groupId.id);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // handle color

  function handleColorBtn(values) {
    const colorObj = {
      colorName: values.prodColorName,
      colorCode: values.prodColorCode,
    };
    const colorUpdate = {
      coloName: updateProdValue.prodColorName,
      coloCode: updateProdValue.prodColorCode,
    };

    setColorState([...colorState, colorObj]);
    setValueUpdate([...valueUpdate, colorUpdate]);
    // dispatch(addColor(colorObj));
    setColorFlag(true);
  }
  function deletColor(name) {
    const neList = colorState.filter((i) => {
      return i.colorName !== name;
    });
    console.log(neList);
    setColorState(neList);
    // dispatch(removeColor(name));
  }

  // dispatch(removeColor(index));

  // handle size
  function handleSizeBtn(values) {
    const sizeObj = {
      size: values.prodSize,
      unitOfSize: values.prodSizeUnit,
    };
    setSizeState([...sizeState, sizeObj]);
    setSizeFlag(true);
  }
  function deletSize(size) {
    const neList = sizeState.filter((i) => {
      return i.size !== size;
    });
    console.log(neList);
    setSizeState(neList);
  }
  // handle wei
  function handleWeightBtn(values) {
    const weightObj = {
      weight: values.prodWeight,
      unit: values.prodWeightUnit,
    };
    setWeightState([...weightState, weightObj]);
    setWeightFlag(true);
  }
  function deletWeight(weight) {
    const neList = weightState.filter((i) => {
      return i.weight !== weight;
    });
    console.log(neList);
    setWeightState(neList);
  }
  // ApiCall();

  function handleChange2(e) {
    const values = {
      id: updateProdValue.id,
      prodName: e.target.value,
      btnProdFlag: false,
    };
    dispatch(addNameToProd(values));
  }

  function handleChange3(e) {
    const values = {
      prodDefault: e.target.value,
    };
    dispatch(addDefaultToProd(values));
  }
  function handleChange4(e) {
    if (e.target.value) {
      setColoDisable(false);
    } else {
      setColoDisable(true);
    }
    const values = {
      prodColorName: e.target.value,
    };
    dispatch(addColorToProd(values));
  }
  function handleChange5(e) {
    const values = {
      prodColorCode: e.target.value,
    };
    dispatch(addColorCodeToProd(values));
  }
  function handleChange6(e) {
    if (e.target.value) {
      setSizeDisable(false);
    } else {
      setSizeDisable(true);
    }
    const values = {
      prodSize: e.target.value,
    };
    dispatch(addSizeToProd(values));
  }
  function handleChange7(e) {
    if (e.target.value) {
      setSizeDisable(false);
    } else {
      setSizeDisable(true);
    }
    const values = {
      prodSizeUnit: e.target.value,
    };
    dispatch(addSizeUnitToProd(values));
  }
  function handleChange8(e) {
    if (e.target.value) {
      setWeightDisable(false);
    } else {
      setWeightDisable(true);
    }
    const values = {
      prodWeight: e.target.value,
    };
    dispatch(addWeightToProd(values));
  }
  function handleChange9(e) {
    if (e.target.value) {
      setWeightDisable(false);
    } else {
      setWeightDisable(true);
    }
    const values = {
      prodWeightUnit: e.target.value,
    };
    dispatch(addWeightUnitToProd(values));
  }
  function handleChange10(e) {
    const values = {
      prodDetail: e.target.value,
    };
    dispatch(addDetailToProd(values));
  }

  function handleSubmit2() {
    console.log("test");
    updateProduct();

    dispatch(changeProdBtn(false));
  }

  function imageHandleChange(e) {
    // setImageFile([...imageFile, URL.createObjectURL(e.target.files[0])]);
    setImageFile(e.target.files[0]);
    console.log(imageFile);
    let data = new FormData();
    // data.append("prodimage", values.prodimage);
  }
  function imageHandleClick(img) {
    // const id = e.target.id;
    // console.log(e.target.);
    const array = [...imageFile];
    const index = array.indexOf(img);
    console.log(index);
    if (index !== -1) {
      array.splice(index, 1);
      setImageFile(array);
    }
  }
  return (
    <div className="prod-form-container">
      <Formik
        initialValues={{
          prodName: "",
          prodDefault: "",
          prodWeight: "",
          prodWeightUnit: "",
          prodColorName: "",
          prodColorCode: "",
          prodSize: "",
          prodSizeUnit: "",
          prodDetail: "",
          prodColors: [],
          prodSizes: [],
          prodWeights: [],
          prodimage: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          values.prodColors = colorState;
          values.prodSizes = sizeState;
          values.prodWeights = weightState;
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          postProduct(values);
          let data = new FormData();
          data.append("prodimage", values.prodimage);
          setimageObj([...imageObj, values.prodimage]);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className="add-prod-wrapper">
                <div className="add-prod-form-list1">
                  <div className="add-prod-form-wrapper">
                    <div className="prod-form-wrapper">
                      <label className="prod-form-label typography-regular20-sans">
                        نام محصول :
                      </label>
                    </div>
                    <input
                      className="prod-form-input"
                      type="prodName"
                      name="prodName"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange2(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodName}
                    />
                  </div>
                  <div className="add-prod-form-wrapper">
                    <div className="prod-form-wrapper">
                      <label className="prod-form-label typography-regular20-sans">
                        مقدار پیش فرض :
                      </label>
                    </div>
                    <input
                      className="prod-form-input"
                      type="prodDefault"
                      name="prodDefault"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange3(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodDefault}
                    />
                  </div>
                </div>
                <div className="add-prod-form-list2">
                  <div className="prod-color-wrapper">
                    <input
                      className="color-radio-btn"
                      type="radio"
                      id="formColor"
                      onClick={() => setColor(false)}
                    />
                    <label
                      htmlFor="formColor"
                      className="prod-form-label typography-regular20-sans"
                    >
                      رنگ :
                    </label>
                    <input
                      disabled={color}
                      placeholder="نام رنگ"
                      className="prod-color-input"
                      type="prodColorName"
                      name="prodColorName"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange4(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodColorName}
                    />
                    <input
                      disabled={color}
                      placeholder="#"
                      className="prod-color-input"
                      type="prodColorCode"
                      name="prodColorCode"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange5(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodColorCode}
                    />
                    <Button
                      disabled={coloDisable}
                      onClick={() => handleColorBtn(values)}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                    {colorFlag
                      ? colorState.map((item, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => deletColor(item.colorName)}
                              className="color-render-box"
                              style={{
                                backgroundColor: item.colorCode,
                              }}
                            >
                              {item.colorName}
                            </div>
                          );
                        })
                      : colorRedux
                      ? colorRedux.map((item, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => deleteColorProduct(item.id)}
                              className="color-render-box"
                              style={{
                                backgroundColor: item.colorCode,
                              }}
                            >
                              {item.colorName}
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <div className="prod-color-wrapper">
                    <input
                      className="color-radio-btn"
                      type="radio"
                      id="formSize"
                      onClick={() => setSize(false)}
                    />
                    <label
                      htmlFor="formSize"
                      className="prod-form-label typography-regular20-sans"
                    >
                      سایز :
                    </label>
                    <input
                      disabled={size}
                      placeholder="مقدار"
                      className="prod-color-input"
                      type="prodSize"
                      name="prodSize"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange6(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodSize}
                    />
                    <input
                      disabled={size}
                      placeholder="واحد اندازه گیری"
                      className="prod-color-input"
                      type="prodSizeUnit"
                      name="prodSizeUnit"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange7(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodSizeUnit}
                    />
                    <Button
                      disabled={sizeDisable}
                      onClick={() => handleSizeBtn(values)}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                    {sizeFlag
                      ? sizeState.map((item) => {
                          return (
                            <div
                              onClick={() => deletSize(item.size)}
                              className="color-render-box"
                              style={{
                                backgroundColor: "white",
                              }}
                            >
                              <span
                                style={{ marginRight: "2px", marginTop: "5px" }}
                              >
                                {item.size}
                              </span>
                              <span>{item.unitOfSize}</span>
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <div className="prod-color-wrapper">
                    <input
                      className="color-radio-btn"
                      type="radio"
                      id="formWeight"
                      onClick={() => setWeight(false)}
                    />
                    <label
                      htmlFor="formWeight"
                      className="prod-form-label typography-regular20-sans"
                    >
                      وزن :
                    </label>
                    <input
                      disabled={weight}
                      placeholder="مقدار"
                      className="prod-color-input"
                      type="prodWeight"
                      name="prodWeight"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange8(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodWeight}
                    />
                    <input
                      disabled={weight}
                      placeholder="واحد اندازه گیری"
                      className="prod-color-input"
                      type="prodWeightUnit"
                      name="prodWeightUnit"
                      onChange={(e) => {
                        handleChange(e);
                        handleChange9(e);
                      }}
                      onBlur={handleBlur}
                      value={updateProdValue.prodWeightUnit}
                    />
                    <Button
                      disabled={weightDisable}
                      onClick={() => handleWeightBtn(values)}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                    {weightFlag
                      ? weightState.map((item) => {
                          return (
                            <div
                              onClick={() => deletWeight(item.weight)}
                              className="color-render-box"
                              style={{
                                backgroundColor: "white",
                              }}
                            >
                              <span
                                style={{ marginRight: "2px", marginTop: "5px" }}
                              >
                                {item.weight}
                              </span>
                              <span>{item.unit}</span>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div className="prod-form-wrapper">
                <label className="prod-form-label typography-regular20-sans">
                  توضیحات :
                </label>
              </div>
              <input
                className="prod-detail-input"
                type="prodDetail"
                name="prodDetail"
                onChange={(e) => {
                  handleChange(e);
                  handleChange10(e);
                }}
                onBlur={handleBlur}
                value={updateProdValue.prodDetail}
              />
              <div className="add-form-btn">
                <div>
                  <label className="prod-form-label typography-regular20-sans">
                    بارگذاری تصاویر :
                  </label>
                  <div className="prod-color-wrapper">
                    <div className="file-input">
                      <input
                        id="file"
                        name="prodimage"
                        placeholder="مقدار"
                        className="prod-image"
                        type="file"
                        onChange={(e) => {
                          setFieldValue("prodimage", e.currentTarget.files[0]);
                          imageHandleChange(e);
                        }}
                      />
                      <label htmlFor="file">
                        <p className="typography-regular-sans">انتخاب تصاویر</p>
                      </label>
                    </div>

                    <Button style={{ display: "none" }}>
                      <AddCircleOutlineIcon />
                    </Button>
                  </div>
                </div>
                <button
                  className="group-name-btn add"
                  type="submit"
                  style={{
                    display: updateProdValue.btnProdFlag ? "none" : "block",
                  }}
                  disabled={isSubmitting}
                >
                  <p className="typography-regular20-sans">ثبت</p>
                </button>
              </div>
              {/* {images.map((img, i) => {
                return (
                  <img
                    key={i}
                    id={i}
                    className="image-preview"
                    src={img}
                    onClick={() => imageHandleClick(img)}
                  />
                );
              })} */}
            </form>
            <button
              className="product-edit-btn"
              style={{
                display: updateProdValue.btnProdFlag ? "block" : "none",
              }}
              disabled={isSubmitting}
              onClick={handleSubmit2}
            >
              <p className="typography-regular20-sans">ویرایش</p>
            </button>
          </>
        )}
      </Formik>
    </div>
  );
}
export default function AddProductForm() {
  return (
    <>
      {/* <Axios /> */}
      <ProdForm />
    </>
  );
}
