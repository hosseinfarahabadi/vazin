import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductGroup } from "../store/actions/productGroup/AddProductGroupAction";

// get product group from server
// export const getProductGroup = async () => {
//   const baseUrl = "http://188.121.121.198:93/api";
//   const dispatch = useDispatch();
//   try {
//     const res = await axios.get(`${baseUrl}/group`);
//     console.log(res);
//     dispatch(addToProductGroup(res.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
// post product group to server
// export const postProductGroup = async (values) => {
//   const baseUrl = "http://188.121.121.198:93/api";

// try {
//   const res = await axios
//     .post(`${baseUrl}/group`, {
//       GroupName: values.groupName,
//     })
//     .then(() => {
//       getProductGroup();
//     });
//   console.log(res);
// } catch (err) {
//   console.log(err);
// }
// };
export async function ApiCall() {
  const baseUrl = "http://188.121.121.198:93/api";
  const dispatch = useDispatch();
  console.log("call");
  try {
    const res = await axios.get(`${baseUrl}/group`);
    console.log(res);
    dispatch(addToProductGroup(res.data));
  } catch (err) {
    console.log(err);
  }
  return <div>ApiCall</div>;
}
export async function ApiCall1(values) {
  const baseUrl = "http://188.121.121.198:93/api";
  const dispatch = useDispatch();
  console.log("call");
  try {
    const res = await axios
      .post(`${baseUrl}/group`, {
        GroupName: values.groupName,
      })
      .then(() => {
        ApiCall();
      });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  return <div>ApiCall</div>;
}
