import axios from "axios";
import "../css/upload.css";
import "../../../utils/style.css";
import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadedImage } from "../../../store/actions/upload/UploadImageAction";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const dispatch = useDispatch();

  const baseUrl = "http://188.121.121.198:93/api";
  // get product  from server
  const getProduct = async () => {
    try {
      dispatch({ type: "LOAD_PRODUCT_LOADING" });
      const res = await axios.get(`${baseUrl}/product`);
      console.log(res);
      dispatch(uploadedImage(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  // post product  to server
  const postProduct = async (formData) => {
    try {
      const res = await axios.post(`${baseUrl}/product`, {
        groupId: formData,
      });
      // .then(() => {
      //   getProduct(groupId.id);
      // });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const onFileChange = (e) => {
    Array.from(e.target.files).map((img) => {
      setSelectedFile((selectedFile) => [...selectedFile, img]);
      setImagePreview((imagePreview) => [
        ...imagePreview,
        URL.createObjectURL(img),
      ]);
    });
    // const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.onload = function (e) {
    //   reader.readAsDataURL(file);
    //   // setImagePreview(e.target.result.split(",")[1].toString());
    //   console.log(imagePreview);
    // };
  };
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile);

    postProduct(formData);
  };

  // File content to be displayed after
  // file upload is complete
  const FileData = () => {
    return (
      <div>
        {imagePreview.map((url) => {
          console.log(url);
          return <img className="upload-priv-image" src={url}></img>;
        })}
        {/* {selectedFile.map((name) => {
          console.log(name.name);
          return <p className="typography-regular20-sans">نام عکس: {name.name}</p>;
        })} */}
        {/* <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p> */}
      </div>
    );
  };

  return (
    <div>
      <div>
        <input multiple type="file" onChange={(e) => onFileChange(e)} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      <FileData />
    </div>
  );
}
