import "../css/muiTable.css";
import "../../../utils/style.css";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "react-scroll/modules";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../../store/actions/product/AddProductAction";
import axios from "axios";
import {
  addToProdUpdate,
  changeProdBtn,
} from "../../../store/actions/updateValue/updateProdValAction";

import { addToSinleProduct } from "../../../store/actions/product/AddSingleProductAtion";

export default function MuiTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const products = useSelector((state) => state.productList);
  const singleProduct = useSelector(
    (state) => state.singleProd.items.productColors
  );
  const updateProdValue = useSelector((state) => state.updateProdVal);
  const groupId = useSelector((state) => state.groupId);
  const openForm = useSelector((state) => state.openForm);
  const dispatch = useDispatch();
  let btnProdFlag;
  const baseUrl = "http://188.121.121.198:93/api";
  // load product on page load
  useEffect(() => {}, []);
  // get product  from server
  const getProduct = async (id) => {
    try {
      dispatch({ type: "LOAD_SINGLE_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product/GetBy/${groupId.id}`);
      // console.log(res);
      dispatch(addToProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  const getSingleProduct = async (id) => {
    try {
      dispatch({ type: "LOAD_SINGLE_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product/${id}`);
      // console.log(res);

      dispatch(addToSinleProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function openModalForm() {
    dispatch({ type: "OPEN_MODAL" });
    console.log("test");
  }
  // delet product group from server
  const deletProductGroup = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/product/${id}`).then(() => {
        getProduct();
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // delete product group
  function deletProductHandle(id) {
    alert("آیا از حذف این مورد مطمئن هستید؟");
    deletProductGroup(id);
  }
  // edit groupname
  function updateProductHandle(id, prodName, prodDefault) {
    btnProdFlag = true;
    dispatch({ type: "OPEN_PROD_MODAL" });
    dispatch(addToProdUpdate({ id, prodName, prodDefault }));
    dispatch(changeProdBtn(btnProdFlag));
  }

  // send groupname and show in the product able for this product group

  function tableClick(
    id,
    groupId,
    prodName,
    prodDefault,
    prodDescription,
    productColors,
    productSizes,
    productWeights
  ) {
    dispatch({ type: "OPEN_PROD_MODAL" });
    btnProdFlag = true;
    dispatch(addToProdUpdate({ id, prodName, prodDefault }));
    dispatch(changeProdBtn(btnProdFlag));
    getSingleProduct(id);

    // const colorUpdate = {
    //   coloName: productColors.colorName,
    //   coloCode: productColors.colorCode,
    // };
    // console.log(id);
    // localStorage.setItem("groupId", JSON.stringify(id));
  }
  return (
    <div className="table-container">
      <Paper
        className="table-wrapper"
        sx={{ width: "98%", overflow: "hidden" }}
      >
        <TableContainer sx={{ height: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    ردیف
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    نام محصول
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    زیرگروه
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p className="typography-regular-sans product-tabel-title">
                    عملیات
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.items.map((prod, key) => (
                <TableRow
                  className="table-row"
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="right"
                    component="th"
                    scope="row"
                    onClick={() =>
                      tableClick(
                        prod.id,
                        prod.groupId,
                        prod.name,
                        prod.defaultValue,
                        prod.description,
                        prod.productColors,
                        prod.productSizes,
                        prod.productWeights
                      )
                    }
                  >
                    {key + 1}
                  </TableCell>
                  <TableCell align="right">{prod.name}</TableCell>
                  <TableCell align="right">
                    <div>
                      <button
                        onClick={openModalForm}
                        className="prod-sub-btn ml3"
                      >
                        <p className="prod-sub-btn-text typography-regular-sans">
                          زیر گروه
                        </p>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <button
                        onClick={() => updateProductHandle(prod.id, prod.name)}
                        className="table-btn"
                      >
                        <ModeEditIcon />
                      </button>
                      <button
                        onClick={() => deletProductHandle(prod.id)}
                        className="table-btn"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  className="table-row"
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <div>
                      <button
                        onClick={openModalForm}
                        className="prod-sub-btn ml3"
                      >
                        <p className="prod-sub-btn-text typography-regular-sans">
                          زیر گروه
                        </p>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <button className="table-btn">
                        <ModeEditIcon />
                      </button>
                      <button className="table-btn">
                        <DeleteIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
