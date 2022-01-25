import styled from "@emotion/styled";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface userData {
  userData: {
    src: string,
    nickname: string,
    postdate: string,
    comment : string
  }
}

export const PostCommentList = ({userData}: userData) => {

  return (
    <CommentList>
      <CommentInfo>
        <Link href="/myprofile">
          <a>
            <AuthorImg src={userData.src} alt="빵주먹님의 프로필사진" />
          </a>
        </Link>
        <Link href="/myprofile">
          <a>
            <AuthorNickName>{userData.nickname}</AuthorNickName>
          </a>
        </Link>
        <CommentDate>{userData.postdate}</CommentDate>
      </CommentInfo>
      <CommentText>{userData.comment}</CommentText>
      <MoreVertIcon className="more"></MoreVertIcon>
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
