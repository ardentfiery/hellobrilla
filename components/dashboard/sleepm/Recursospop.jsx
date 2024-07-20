import React from "react";
import { Modal, Placeholder } from "rsuite";

const Recursospop = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={size === "full" ? 100 : 10} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Recursospop;
