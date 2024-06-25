"use client";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";

const DropZones = () => {
  const [files, setFiles] = useState([]);
  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} minHeight='80px' label='Drop files here or click to upload'>
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
      ))}
    </Dropzone>
  );
};

export default DropZones;
