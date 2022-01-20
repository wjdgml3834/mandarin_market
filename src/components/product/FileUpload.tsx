import styled from "@emotion/styled";
import { useState } from "react";

interface getImage {
  getImage: (img: boolean) => void
}

export const FileUpload = ({getImage}: getImage) => {

  const [image, setImage] = useState("")
  const [isImage, setIsImage] = useState(false)

  const imagePreview = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setIsImage(true)
    getImage(true)
  }

  return (
    <ImgLabel>
      <Img className={`${isImage ? 'upload': ''}`} src={image} alt="" />
      <ImgInput
        type="file"
        id="img"
        accept="image/*"
        onChange={imagePreview}
      ></ImgInput>
    </ImgLabel>
  );
};

const ImgLabel = styled.label`
  margin: 18px auto 30px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 204px;
  background: #f2f2f2;
  border: 0.5 solid #767676;
  display: block;
  border-radius: 10px;
  cursor: pointer;
  &::after {
    content: '';
    width: 36px;
    height: 36px;
    display: inline-block;
    background: #C4C4C4 url('/images/upload-file.svg') no-repeat center;
    border-radius: 25px;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;

const Img = styled.img `
  width: 100%;
  height: 100%;
  background: url('${props => props.src}');
  object-fit: cover;
  display: none;
  &.upload {
    display: block
  }
`

const ImgInput = styled.input`
  display: none;
`
