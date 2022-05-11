import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductGroup } from "../../../store/actions/productGroup/AddProductGroupAction";
import { addToUpdate } from "../../../store/actions/updateValue/UpdateValueAction";

export default function InputForm() {
  //   const updateValue = useSelector((state) => state.updateValue);
  //   const dispatch = useDispatch();

  //   const baseUrl = "http://188.121.121.198:93/api";
  //   // get product group from server
  //   const getProductGroup = async () => {
  //     try {
  //       const res = await axios.get(`${baseUrl}/group`);
  //       dispatch(addToProductGroup(res.data));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   // update product group to server
  //   const updateProductGroup = async () => {
  //     try {
  //       const res = await axios
  //         .put(`${baseUrl}/group`, {
  //           id: updateValue.items.id,
  //           groupName: updateValue.items.groupName,
  //         })
  //         .then(() => {
  //           getProductGroup();
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   function testFun(e) {
  //     console.log("test");
  //   }
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     updateProductGroup();
  //   }
  //   function handleChange(e) {
  //     const valueUpdate = {
  //       id: updateValue.items.id,
  //       groupName: e.target.value,
  //     };
  //     dispatch(addToUpdate(valueUpdate));
  //   }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={updateValue.items.groupName}
          onChange={handleChange}
        />
        <button onClick={testFun}>ویرایش</button>
      </form> */}
    </div>
  );
}
