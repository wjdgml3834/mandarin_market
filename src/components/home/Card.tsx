import styled from "@emotion/styled";
import React, { useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Post } from "../../types/Post";

interface PostProps {
  postData: Post;
}

export const Card = ({ postData }: PostProps) => {
  const [likeNum, setLikeNum] = useState(0);
  const [checkClick, setCheckClick] = useState(true);
  const [heartColor, setHeartColor] = useState("icon");

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

  return (
    <Cont>
      <article>
        <h3 className="sr-only">포스트 아이템</h3>
        <AuthorCont>
          <h4 className="sr-only">포스트 글쓴이</h4>
          <AuthorImg src={postData.src} alt="작성자 이미지" />
          <AuthorInfo>
            <AuthorNickName>{postData.nickname}</AuthorNickName>
            <AuthorId>{postData.email}</AuthorId>
          </AuthorInfo>
        </AuthorCont>
        <PostCont>
          <h4 className="sr-only">포스트 내용</h4>
          <PostTxt>{postData.txt}</PostTxt>
          <PostImgCont>
            <PostImgList>
              <PostImgItem>
                <PostImg src={postData.postimg} alt="post-img" />
              </PostImgItem>
            </PostImgList>
          </PostImgCont>
          <LikeCommentCont>
            <Like aria-label="좋아요 버튼" onClick={onClick}>
              <FavoriteBorderIcon className={heartColor} />
              <span>{likeNum}</span>
            </Like>
            <Link href="/postdetail">
              <Comment>
                <ChatBubbleOutlineIcon className="icon" />
                <span className="sr-only">댓글 보기, 남기기</span>
                <span>0</span>
              </Comment>
            </Link>
          </LikeCommentCont>
          <PostDate>{postData.postdate}</PostDate>
        </PostCont>
        <MoreBtn>
          <span className="sr-only">더보기 버튼</span>
          <MoreVertIcon className="More-btn-icon" />
        </MoreBtn>
      </article>
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
  padding-left: 54px;
`;

const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const PostImgCont = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const PostImgList = styled.ul`
  display: flex;
`;

const PostImgItem = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const PostImg = styled.img`
  border-radius: 10px;
  margin-bottom: 16px;
  height: 100%;
  object-fit: cover;
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
