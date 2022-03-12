import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { API_ENDPOINT } from "../../constants";

interface getImage {
  image: string
  getImage: (src: string) => void
  isImage: boolean
  getIsImage: (img: boolean) => void 
  token: string | null | undefined
}

export const FileUpload = ({image, getImage, isImage, getIsImage, token}: getImage) => {

  const upload = async (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const files = target.files as FileList

    let formData = new FormData();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-type': 'application/json',
      },
    }
    
    formData.append('image', files[0]);
    
    const res = await axios.post(`${API_ENDPOINT}image/uploadfile`, formData, config)

    const imgName = res.data.filename;
    
    const imgUrl= `${API_ENDPOINT}${imgName}`

    getImage(imgUrl)
    getIsImage(true)
  }

  return (
    <ImgLabel>
      <Img className={`${image ? 'upload': ''}`} src={image} alt="" />
      <ImgInput
        type="file"
        id="img"
        accept="image/*"
        onChange={upload}
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
  /* background: url('${props => props.src}'); */
  object-fit: cover;
  display: none;
  &.upload {
    display: block
  }
`

const ImgInput = styled.input`
  display: none;
`
