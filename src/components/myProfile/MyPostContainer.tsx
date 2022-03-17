import axios from "axios";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../constants";
import { MyPostCard } from "./MyPostCard";
import { MyPost } from "../../types/MyPost";

interface PostProps {
  postList: MyPost
  token: string | null | undefined
}

export const MyPostContainer = ({postList, token}: PostProps) => {
  return (
    <PostContainer>
      {postList.map((postData) => {
        return <MyPostCard key={postData.id} postData={postData} token={token}/>;
      })}
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 70px;
`