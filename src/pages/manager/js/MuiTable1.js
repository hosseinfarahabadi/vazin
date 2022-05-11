import "../css/manager.css";
import "../../../utils/style.css";
import React, { useEffect, useState } from "react";
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
import { addToProductGroup } from "../../../store/actions/productGroup/AddProductGroupAction";
import axios from "axios";
import {
  addToUpdate,
  changeBtn,
} from "../../../store/actions/updateValue/UpdateValueAction";
import { addToGroupId } from "../../../store/actions/groupid/GroupIdAction";
import { addToProduct } from "../../../store/actions/product/AddProductAction";
import { prodBtnDisable } from "../../../store/actions/productBtnDisable/ProdBtnAction";

export default function MuiTable1() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const productGroup = useSelector((state) => state.productGroup);
  const groupId = useSelector((state) => state.groupId);
  const [isActive, setActive] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const dispatch = useDispatch();
  // base url
  const baseUrl = "http://188.121.121.198:93/api";

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
  // get product group from server
  const getProductGroup = async () => {
    try {
      dispatch({ type: "LOAD_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/group`);
      // console.log(res);
      dispatch(addToProductGroup(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  // delet product group from server
  const deletProductGroup = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/group/${id}`).then(() => {
        getProductGroup();
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  let updateValues;
  let btnFlag;
  // delete product group
  function deletProductGroupHandle(id) {
    alert("آیا از حذف این مورد مطمئن هستید؟");
    deletProductGroup(id);
  }

  // edit groupname
  function updateProductGroupHandle(id, groupName) {
    btnFlag = true;
    dispatch(addToUpdate({ id, groupName }));
    dispatch(changeBtn(btnFlag));
  }

  // send groupname and show in the product able for this product group
  function tableClick(id) {
    dispatch(addToGroupId(id));
    getProduct(id);
    setActive(!isActive);
    dispatch(prodBtnDisable(false));
    localStorage.setItem("groupId", JSON.stringify(id));
  }
  return (
    <div className="table-container1">
      <Paper
        className="table-wrapper"
        sx={{ width: "90%", overflow: "hidden" }}
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
                    نام گروه
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
              {productGroup.items.map((prod, key) => (
                <TableRow
                  onClick={() => tableClick(prod.id)}
                  // className={isActive ? "table-row-active" : "table-row"}
                  className="table-row"
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right" component="th" scope="row">
                    {key + 1}
                  </TableCell>
                  <TableCell align="right">{prod.groupName}</TableCell>
                  <TableCell align="right">
                    <div>
                      <button
                        onClick={() =>
                          updateProductGroupHandle(prod.id, prod.groupName)
                        }
                        className="table-btn"
                      >
                        <ModeEditIcon />
                      </button>
                      <button
                        onClick={() =>
                          deletProductGroupHandle(prod.id, prod.groupName)
                        }
                        className="table-btn"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </Paper>
    </div>
  );
}
