import React from "react";
import { Modal, Placeholder } from "rsuite";

const TutorialPop = ({ size, open, handleClose, tutorial }) => {
  return (
    <div>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <p>
              {" "}
              <strong>{tutorial?.name}</strong> - {tutorial?.description}
            </p>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={tutorial?.videoUrl}
            className={`h-[80vh] min-w-[100%]`}
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TutorialPop;
