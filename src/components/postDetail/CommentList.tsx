import styled from "@emotion/styled";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { CommentModal } from "./CommentModal";
import { CommentDelModal } from "./CommentDelModal";

interface userData {
  userData: {
    src: string,
    nickname: string,
    postdate: string,
    comment : string
  }
}

export const PostCommentList = ({userData}: userData) => {
  const [IsModal, setIsModal] = useState(false);
  const [isDelModal, setIsDelModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const delModal = () => {
    setIsDelModal(true);
  };
  const closeDelModal = () => {
    setIsDelModal(false);
    setIsModal(false);
  };

  return (
    <CommentList>
      <CommentInfo>
        <Link href="/profile">
          <a>
            <AuthorImg src={userData.src} alt="누구님의 프로필사진" />
          </a>
        </Link>
        <Link href="/profile">
          <a>
            <AuthorNickName>{userData.nickname}</AuthorNickName>
          </a>
        </Link>
        <CommentDate>{userData.postdate}</CommentDate>
      </CommentInfo>
      <CommentText>{userData.comment}</CommentText>
      <button onClick={openModal}>
        <MoreVertIcon className="more" />
      </button>
      <Background className={`${IsModal}`} onClick={closeModal} />
      <CommentModal Modal={IsModal} delModal={delModal}/>
      {isDelModal && <CommentDelModal closeDelModal={closeDelModal} />}
    </CommentList>
    
  
  );
};

const CommentList = styled.li`
  margin-bottom: 16px;
  position: relative;
  .more {
    color: #c4c4c4;
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    width: 20px;
    height: 20px;
  }
`

const CommentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;

const AuthorImg = styled.img`
  width: 36px;
  height: 36px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
`;

const AuthorNickName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: block;
  margin: 6px 6px 0 0;
`;

const CommentDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #767676;
  margin-top: 8.5px;
  &::before {
    content: "·";
    margin-right: 4.5px;
  }
`;

const CommentText = styled.p`
  padding-left: 48px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

const Background = styled.div`
  &.true {
    position: fixed;
    top: 72px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #777;
    opacity: 0.4;
    z-index: 10;
  }
`;

