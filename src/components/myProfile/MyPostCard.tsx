import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MyPost } from "../../types/MyPost";
import { PostModal } from "../home/PostModal";
import { DeleteModal } from "../home/DeleteModal";
import { COLOR } from "../../constants";


interface PostProps {
  postData: MyPost
  token: string | null | undefined
}

export const MyPostCard = ({ postData, token }: PostProps) => {

  const { author, content, createdAt, image, id } = postData

  // const { author, commentCount, comments, content, createdAt, heartCount, hearted, image, id } = postData

  const imgArr = image.split(',')

  const [likeNum, setLikeNum] = useState(0);
  const [checkClick, setCheckClick] = useState(true);
  const [heartColor, setHeartColor] = useState("icon");

  const [postModal, setPostModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const openPostModal = () => {
    setPostModal(true);
  };
  const closePostModal = () => {
    setPostModal(false);
  };
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
    setPostModal(false);
  };

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    if (checkClick) {
      setLikeNum((current) => current + 1);
      setCheckClick(!checkClick);
    } else {
      setLikeNum((current) => current - 1);
      setCheckClick(!checkClick);
    }

    if (heartColor === "icon") {
      setHeartColor("Like-icon");
    } else setHeartColor("icon");
  };

  const updatedDate = `${createdAt.slice(0, 4)}년 ${createdAt.slice(5, 7,).replace(/(^0+)/, "")}월 ${createdAt.slice(8, 10).replace(/(^0+)/, "")}일`

  const [nextImg, setNextImg] = useState("");
  const [changeFirstBtnColor, setChangeFirstBtnColor] = useState(true);
  const [changeSecondBtnColor, setChangeSecondBtnColor] = useState(false);
  const [changeThirdBtnColor, setChangeThirdBtnColor] = useState(false);

  const slider = (event: any) => {
    if (event.target.className.includes("second-btn")) {
      setNextImg("secondChange");
      setChangeFirstBtnColor(false);
      setChangeSecondBtnColor(true);
      setChangeThirdBtnColor(false);
    } else if (event.target.className.includes("third-btn")) {
      setNextImg("thirdChange");
      setChangeSecondBtnColor(false);
      setChangeThirdBtnColor(true);
      setChangeFirstBtnColor(false);
    } else {
      setNextImg("");
      setChangeFirstBtnColor(true);
      setChangeSecondBtnColor(false);
      setChangeThirdBtnColor(false);
    }
  };

  return (
    <Cont>
      <article>
        <h3 className="sr-only">포스트 아이템</h3>
        <AuthorCont>
          <h4 className="sr-only">포스트 글쓴이</h4>
          <AuthorImg src={author.image} alt="작성자 이미지" />
          <AuthorInfo>
            <AuthorNickName>{author.username}</AuthorNickName>
            <AuthorId>{author.accountname}</AuthorId>
          </AuthorInfo>
        </AuthorCont>
        <PostCont>
          <h4 className="sr-only">포스트 내용</h4>
          <PostTxt>{content}</PostTxt>
          <PostImgCont className={nextImg}>
            <PostImgList>
              {image !== '' && 
              (
                <>
                  {imgArr.map((img) => {
                    return (
                      <PostImgItem key={img}>
                        <PostImg src={img} alt="post-img" />
                      </PostImgItem>
                    )
                  })}
                </>
              )}
            </PostImgList>
          </PostImgCont>
            <PostImgBtnList
              className={imgArr.length < 2 ? "btnHidden" : ""}
            >
            {imgArr.length === 2 ? (
              <>
                <li>
                  <PostImgBtn
                    className={`${
                      changeFirstBtnColor
                        ? "first-btn first-change"
                        : "first-btn"
                    }`}
                    onClick={slider}
                  ></PostImgBtn>
                </li>
                <li>
                  <PostImgBtn
                    className={`${
                      changeSecondBtnColor
                        ? "second second-change"
                        : "second-btn"
                    }`}
                    onClick={slider}
                  ></PostImgBtn>
                </li>
              </>
            ) : (
              <>
                <li>
                  <PostImgBtn
                    className={`${
                      changeFirstBtnColor
                        ? "first-btn first-change"
                        : "first-btn"
                    }`}
                    onClick={slider}
                  ></PostImgBtn>
                </li>
                <li>
                  <PostImgBtn
                    className={`${
                      changeSecondBtnColor
                        ? "second-btn second-change"
                        : "second-btn"
                    }`}
                    onClick={slider}
                  ></PostImgBtn>
                </li>
                <li>
                  <PostImgBtn
                    className={`${
                      changeThirdBtnColor
                        ? "third-btn third-change"
                        : "third-btn"
                    }`}
                    onClick={slider}
                  ></PostImgBtn>
                </li>
              </>
            )}
          </PostImgBtnList>
          <LikeCommentCont>
            <Like aria-label="좋아요 버튼" onClick={onClick}>
              <FavoriteBorderIcon className={heartColor} />
              <span>{likeNum}</span>
            </Like>
            <Link
              key={author._id}
              href={{
                pathname: `/postdetail/${id}`,
                query: {
                  title: content,
                  nickname: author.username
                }
              }}
              as={`/postdetail/${id}`}
            >
              <Comment>
                <ChatBubbleOutlineIcon className="icon" />
                <span className="sr-only">댓글 보기, 남기기</span>
                <span>0</span>
              </Comment>
            </Link>
          </LikeCommentCont>
          <PostDate>{updatedDate}</PostDate>
        </PostCont>
        <MoreBtn onClick={openPostModal}>
          <span className="sr-only">더보기 버튼</span>
          <MoreVertIcon className="More-btn-icon" />
        </MoreBtn>
      </article>
      <Background
        className={`${postModal}`}
        onClick={closePostModal}
      ></Background>
      <PostModal id={id} postModal={postModal} openDeleteModal={openDeleteModal} />
      {deleteModal && <DeleteModal id={id} token={token} closeDeleteModal={closeDeleteModal} />}
    </Cont>
  );
};

const Cont = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin: 0px auto;
  margin-bottom: 20px;
`;

const AuthorCont = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

const AuthorImg = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorNickName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;

const AuthorId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

const PostCont = styled.section`
  margin-left: 54px;
  overflow: hidden;
`;

const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  word-wrap: break-word;
`;

const PostImgCont = styled.div`
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;

  &.secondChange {
    transform: translate(-304px);
    transition: all 1s ease-in-out;
  }
  &.thirdChange {
    transform: translate(-608px);
    transition: all 1s ease-in-out;
  }
`;

const PostImgList = styled.ul`
  display: flex;
  /* border: 0.5px solid #dbdbdb; */
`;

const PostImgItem = styled.li`
  min-width: 304px;
  max-height: 228px;
  min-height: 228px;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

const PostImg = styled.img`
  border-radius: 10px;
  margin-bottom: 16px;
  height: 100%;
  width: 304px;
  object-fit: cover;
`;

const PostImgBtnList = styled.ul`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 60%;
  bottom: 80px;
  transform: translateX(-50%);
  box-sizing: border-box;
  list-style: none;

  &.btnHidden {
    display: none;
  }
`;

const PostImgBtn = styled.button`
  background-color: white;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  &.first-change {
    background-color: ${COLOR.orange};
  }
  &.second-change {
    background-color: ${COLOR.orange};
  }
  &.third-change {
    background-color: ${COLOR.orange};
  }
`;

const LikeCommentCont = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
  .icon {
    width: 16px;
    height: 14px;
  }
`;

const Like = styled.button`
  border: none;
  cursor: pointer;
  margin-right: 18px;
  background-color: inherit;
  padding: 0;
  display: flex;
  align-items: center;
  color: #767676;
  .Like-icon {
    width: 16px;
    height: 14px;
    color: red;
  }
`;

const Comment = styled.a`
  display: flex;
  align-items: center;
  color: #767676;
  cursor: pointer;
`;

const PostDate = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
`;

const MoreBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 5px;
  right: 0;
  width: 18px;
  height: 18px;
  color: #c4c4c4;
  background-color: white;
  .More-btn-icon {
    width: 20px;
    height: 20px;
  }
`;

const Background = styled.div`
  &.true {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #777;
    opacity: 0.4;
    z-index: 10;
  }
`;
