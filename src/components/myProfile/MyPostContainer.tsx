import axios from "axios";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../constants";
import { MyPostCard } from "./MyPostCard";

export const MyPostContainer = () => {
  const [postList, setPostList] = useState([{
    author: {
      accountname: "",
      username: "",
      image: "/images/ellipse-profile.svg",
      _id: "",
    },
    commentCount: 0,
    comments: [],
    content: "",
    createdAt: "",
    heartCount: 0,
    hearted: false,
    image: "",
    id: ""
  }])

  const { data: session } = useSession()

  const token = session?.user?.name
  const loginUser = session?.user?.email

  const getPost = async () => {
    const res = await axios.get(`${API_ENDPOINT}post/${loginUser}/userpost`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    setPostList(res.data.post)
  };

  useEffect(() => {
    getPost()
  }, []);

  return (
    <PostContainer>
      {postList.map((postData) => {
        return <MyPostCard key={postData.id} postData={postData} />;
      })}
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 70px;
`