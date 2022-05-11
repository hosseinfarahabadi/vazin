import * as React from "react";
import Box from "@mui/material/Box";
import "./mediaModal.css";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UploadModal({ handleClose }) {
  const openMedia = useSelector((state) => state.openMediaModal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "CLOSE_MEDIA_MODAL" });
  };
  return (
    <div>
      <Modal
        open={openMedia.openMedia}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <MediaComponent /> */}
          <CloseIcon onClick={closeModal} className="close-btn-modal" />
        </Box>
      </Modal>
    </div>
  );
}
