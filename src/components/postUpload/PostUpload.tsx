import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import React, { useCallback, useRef, useState } from "react";
import { COLOR } from "../../constants";
import { FileUpload } from "./FileUpload";

export const PostUpload = () => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const resizeHeight = useCallback(() => {
    if (textAreaRef === null || textAreaRef.current === null) {
      return
    }
    textAreaRef.current.style.height = '18px'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
  }, [])
  
  const [text, setText] = useState("")
  const [isText, setIsText] = useState(false)

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    if(e.target.value.length > 0) {
      setIsText(true)
    } else {
      setIsText(false)
    }
  }, [])

  const [images, setImages] = useState([] as string[])
  const [isImage, setIsImage] = useState(false)

  const getImage = (src: string[]) => {
    setImages(src)
  }

  const getIsImage = (img: boolean) => {
    setIsImage(img)
  }

  const deleteImg = (image: string) => {
    const currentIndex: number = images.indexOf(image)
    let newImgList = [...images]
    newImgList.splice(currentIndex, 1)
    setImages(newImgList)
    if(currentIndex < 1) {
      setIsImage(false)
    }
  }

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }, [])

  return (
    <Container>
      <h2 className="sr-only">게시글 작성 페이지</h2>
      <ProfileImg src="/images/ellipse-profile.svg"/>
      <FillContainer>
        <h3 className="sr-only">게시글 작성</h3>
        <Form onSubmit={onSubmit}>
          <label>
            <Textarea
              name="text"
              value={text}
              onChange={onChange}
              ref={textAreaRef}
              onInput={resizeHeight}
              placeholder="게시글 입력하기..."
            ></Textarea>
          </label>
          <FileUpload images={images} getImage={getImage} getIsImage={getIsImage}/>
          <SaveBtn disabled={!(isText || isImage)}>업로드</SaveBtn>
        </Form>
        <section>
          <h4 className="sr-only">업로드된 사진</h4>
          <ImgListContainer>
            {images.map((image, index) => (
              <ImgList key={index}>
                <UploadedImg src={`${image}`} alt={`${index}번째 이미지`}/>
                <CloseIcon className="close" onClick={() => deleteImg(image)}></CloseIcon>
              </ImgList>
            ))}
          </ImgListContainer>
        </section>
      </FillContainer>
    </Container>
  );
};

const Container = styled.section`
  min-width: 390px;
  padding: 74px 0 20px 16px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50px;
  border: 0.5px solid #dbdbdb;
  background-size: cover;
`

const FillContainer = styled.article`
  min-width: 300px;
  width: 100%;
  padding-right: 16px;
`

const Form = styled.form`
  padding: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  border: none;
  padding: 0;
  resize: none;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const ImgListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const ImgList = styled.li`
  width: 300px;
  height: 220px;
  border: 0.5px solid #dbdbdb;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  .close {
    position: absolute;
    top: 6px;
    right: 6px;
    height: 22px;
    width: 22px;
    color:#727272;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }
`

const UploadedImg = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SaveBtn = styled.button`
  position: absolute;
  top: 31px;
  right: 16px;
  width: 90px;
  height: 32px;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${COLOR.orange};
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
