import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>
        <FiUpload />
        Insira aqui a imagem do estabelecimento
      </p>
    </div>
  );
};

export default Dropzone;
