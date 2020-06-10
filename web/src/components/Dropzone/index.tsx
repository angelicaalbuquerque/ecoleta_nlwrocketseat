import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./styles.css";
import { FiUpload } from "react-icons/fi";

const Dropzone = () => {
  const [selectFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectFileUrl ? (
        <img src={selectFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Insira aqui a imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default Dropzone;
