import React from "react";
import { Profile } from "./Profile";
import { Modal } from "rsuite";
const Popup = ({ size, open, handleClose }) => {
  return (
    <div>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Profile />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Popup;
