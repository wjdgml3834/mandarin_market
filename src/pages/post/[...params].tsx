import axios from "axios";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PostModal } from "../../components/profile/PostModal";
import { UploadContainer } from "../../components/postUpload/Container";
import { EditContainer } from "../../components/postUpload/EditContainer";
import { API_ENDPOINT } from "../../constants";
import { useState, useEffect } from "react";

const Edit: NextPage = () => {
  const router = useRouter();
  // const id = router.asPath.split('/')[2]
  const [id, setId] = useState("0");
  useEffect(() => {
    try {
      setId(router.query.params![0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <Head>
        <title>게시글 수정 | 감귤마켓</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">게시글 수정</h1>
      <EditContainer id={id} />
    </section>
  );
};

export default Edit;
