import type { NextPage } from "next";
import Head from "next/head";
import { UploadContainer } from "../../components/postUpload/Container";

const Upload: NextPage = () => {

  return (
    <section>
      <Head>
        <title>게시글 작성｜감귤마켓</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">게시글 작성</h1>
      <UploadContainer />
    </section>
  );
};

export default Upload;