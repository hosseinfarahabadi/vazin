import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addToSinleProduct } from "../../../store/actions/product/AddSingleProductAtion";
const baseUrl = "http://188.121.121.198:93/api";

export default function DeleteColorApi({ _id }) {
  console.log("sss");
  const dispatch = useDispatch();

  return null;
}
