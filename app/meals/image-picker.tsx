"use client";
import { useRef, useState } from "react";
import classess from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }: any) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");
  function pickImage() {
    imageInputRef!.current!.click();
  }
  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader)
        setImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }else{
        setImage('');
    }
  }
  return (
    <div className={classess.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classess.controls}>
        <div className={classess.preview}>
          {!image && <p>No image picked</p>}
          {image && <Image src={image} alt="preview" fill />}
        </div>
        <input
          ref={imageInputRef}
          onChange={handleImageChange}
          className={classess.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />
        <button className={classess.button} type="button" onClick={pickImage}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
