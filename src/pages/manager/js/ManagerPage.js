import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import "../css/manager.css";
import { useSelector, useDispatch } from "react-redux";
import MuiTable from "./MuiTable";
import MuiTable1 from "./MuiTable1";
import ProdFormModal from "./ProdFormModal";
import MuiTable2 from "./MuiTable2";
import AddSubForm from "./AddSubForm";
import axios from "axios";
import { addToProductGroup } from "../../../store/actions/productGroup/AddProductGroupAction";
import {
  addToUpdate,
  changeBtn,
} from "../../../store/actions/updateValue/UpdateValueAction";
import Loading from "../../../components/loading/Loading";
import { addToProduct } from "../../../store/actions/product/AddProductAction";
import { changeProdBtn } from "../../../store/actions/updateValue/updateProdValAction";
import SideMenu from "../../../components/slidemenu/SideMenu";
import MediaModal from "../../../components/modal/UploadModal";

function LoginForm() {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const productGroup = useSelector((state) => state.productGroup);
  const updateValue = useSelector((state) => state.updateValue);
  const baseUrl = "http://188.121.121.198:93/api";
  // load product group on page load
  useEffect(() => {
    getProductGroup();
    // getProduct();
  }, []);
  // get product  from server
  const getProduct = async () => {
    try {
      dispatch({ type: "LOAD_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product`);
      console.log(res);
      dispatch(addToProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  // get product group from server
  const getProductGroup = async () => {
    try {
      dispatch({ type: "LOAD_PRODUCT_GROUP_LOADING" });
      const res = await axios.get(`${baseUrl}/group`);
      // console.log(res);
      dispatch(addToProductGroup(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  // post product group to server
  const postProductGroup = async (values) => {
    try {
      const res = await axios
        .post(`${baseUrl}/group`, {
          GroupName: values.groupName,
        })
        .then(() => {
          getProductGroup();
        });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // update product group to server
  const updateProductGroup = async () => {
    try {
      const res = await axios
        .put(`${baseUrl}/group`, {
          id: updateValue.id,
          groupName: updateValue.groupName,
        })
        .then(() => {
          getProductGroup();
        });
    } catch (err) {
      console.log(err);
    }
  };
  // ApiCall();
  function handleChange2(e) {
    const valueUpdate = {
      id: updateValue.id,
      groupName: e.target.value,
      btnFlag: false,
    };
    dispatch(addToUpdate(valueUpdate));
  }
  function handleSubmit2() {
    console.log("test");
    updateProductGroup();
    dispatch(changeBtn(false));
  }
  return (
    <div className="group-name-container">
      <Formik
        initialValues={{ groupName: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.groupName) {
            errors.groupName = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, actions }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          postProductGroup(values);
          console.log("true");
          dispatch({ type: "REMOVE_FROM_UPDATE" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <form className="group-name-form" onSubmit={handleSubmit}>
              <div className="group-name-wrapper">
                <label className="group-name-label typography-regular20-sans">
                  نام گروه :
                </label>
                <Field
                  className="group-name-input"
                  type="groupName"
                  name="groupName"
                  onChange={(e) => {
                    handleChange(e);
                    handleChange2(e);
                    // setFieldValue("groupName", updateValue.items[0].groupName);
                    // changeValue("groupName", setFieldValue);
                  }}
                  onBlur={handleBlur}
                  value={updateValue.groupName}
                />
                {errors.groupName}
                <button
                  className="group-name-btn "
                  style={{ display: updateValue.btnFlag ? "none" : "block" }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  <p className="typography-regular20-sans">ثبت</p>
                </button>
              </div>
            </form>
            <button
              className="group-name-btn1"
              style={{ display: updateValue.btnFlag ? "block" : "none" }}
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

export default function ManagerPage() {
  const [productgroupName, setProductgroupName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    dispatch({ type: "OPEN_PROD_MODAL" });
    dispatch(changeProdBtn(false));
  };
  const handleClose = () => dispatch({ type: "CLOSE_PROD_MODAL" });
  const dispatch = useDispatch();
  const handleCloseForm = () => dispatch({ type: "CLOSE_MODAL" });
  const handleCloseMedia = () => dispatch({ type: "CLOSE_MEDIA_MODAL" });
  const loadingProductGroup = useSelector(
    (state) => state.productGroup.loading
  );
  const loadingProduct = useSelector((state) => state.productList.loading);
  const openProdModal = useSelector((state) => state.openProdModal);
  const prodBtn = useSelector((state) => state.prodBtnDisable.flag);

  return (
    <div>
      <div className="manager-wrapper">
        <SideMenu />
        <MediaModal handleClose={handleCloseMedia} />

        <Container className="manager-table" maxWidth="lx">
          <div className="product-group">
            <div className="product-group-title-box">
              <p className="typography-bold-sans product-group-title">
                ثبت گروه محصولات
              </p>
            </div>
            <div className="product-group-box">
              {/* <InputForm /> */}
              <LoginForm />
              {loadingProductGroup ? (
                <Loading />
              ) : (
                <MuiTable1 productgroupName={productgroupName} />
              )}
            </div>
          </div>
          <div className="product">
            <div className="product-title-box">
              <p className="typography-bold-sans product-title">ثبت محصولات</p>
            </div>
            <div className="product-box bot">
              {/* <AddProductForm /> */}
              <div className="prod-btn-wrap">
                <Button
                  disabled={prodBtn}
                  className="prod-add-btn"
                  onClick={handleOpen}
                >
                  <p className="typography-regular20-sans  ">افزودن محصول</p>
                </Button>
              </div>
              <ProdFormModal open={open} handleClose={handleClose} />
              <AddSubForm handleClose={handleCloseForm} />
              {loadingProduct ? <Loading /> : <MuiTable />}
            </div>
            <div className="product-box">
              <MuiTable2 />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(Manager);
