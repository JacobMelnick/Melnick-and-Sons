import react, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { name: "MuiExample_Component" }
);

type ModalProps = {
  handleClose: any;
  image: any;
  selectedPhoto: string;
};

const Modal: React.FC<ModalProps> = ({ image, selectedPhoto }) => {
  console.log(image);

  return (
    <div>
      {selectedPhoto === image.asset.url && (
        <Lightbox large={image.asset.url} alt={image.asset.originalFilename} />
      )}
    </div>
  );
};

export default Modal;
