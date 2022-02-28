import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { API_ENDPOINT, COLOR } from "../../constants";

interface getImage {
  images: string[],
  getImage: (src: string[]) => void,
  getIsImage: (img: boolean) => void,
  token: string | null | undefined
}

export const FileUpload = ({images, getImage, getIsImage, token}: getImage) => {
  // const [imgUrl, setImgUrl] = useState('')
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

    const imgUrlList: Array<string> = [...images]
    
    if(imgUrlList.length < 3) {
      for (let i = 0; i < files.length; i++) {
        imgUrlList.push(imgUrl)
      } 
    } else {
      alert('이미지는 최대 3개까지 업로드할 수 있습니다.')
    }
    console.log(imgUrlList);
    getImage(imgUrlList)
    getIsImage(true) 
  }

  return (
    <ImgLabel>
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
  width: 50px;
  height: 50px;
  display: inline-block; 
  background: ${COLOR.orange} url("/images/upload-file.svg") no-repeat center/60%;
  border-radius: 25px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10;
  cursor: pointer;
`;

const ImgInput = styled.input`
  display: none;
`
