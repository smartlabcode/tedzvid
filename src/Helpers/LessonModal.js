// src/Components/LessonModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LessonModal = ({ show, handleClose, title, children }) => {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{t(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal">{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("buttons.close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LessonModal;
