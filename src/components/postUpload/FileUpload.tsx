import styled from "@emotion/styled";
import { COLOR } from "../../constants";

interface getImage {
  images: string[]
  getImage: (src: string[]) => void
  getIsImage: (img: boolean) => void
}

export const FileUpload = ({images, getImage, getIsImage}: getImage) => {

  const imagesPreview = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const files = target.files as FileList

    const imgUrlList: Array<string> = [...images]

    for (let i = 0; i < files.length; i += 1) {
      const imgUrl= URL.createObjectURL(files[i])
      if(imgUrlList.length < 3) {
        imgUrlList.push(imgUrl)
      } else {
        alert('이미지는 최대 3개까지 업로드할 수 있습니다.')
      }
    }
    getImage(imgUrlList)
    getIsImage(true)
  }
    

  return (
    <ImgLabel>
      <ImgInput
        type="file"
        id="img"
        accept="image/*"
        onChange={imagesPreview}
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
