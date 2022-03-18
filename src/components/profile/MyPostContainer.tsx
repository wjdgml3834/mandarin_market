import styled from "@emotion/styled";
import { MyPostCard } from "./MyPostCard";
import { MyPost } from "../../types/MyPost";

interface PostProps {
  postList: MyPost[]
  token: string | null | undefined
  loginUser: string | null | undefined
}

export const MyPostContainer = ({postList, token, loginUser}: PostProps) => {
  return (
    <PostContainer>
      {postList.map((postData) => {
        return <MyPostCard key={postData.id} postData={postData} token={token} loginUser={loginUser}/>;
      })}
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 70px;
`