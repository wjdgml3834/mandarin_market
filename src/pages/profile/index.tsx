import type { NextPage } from "next";
import Head from "next/head";
import { MyContainer } from "../../components/profile/MyContainer";
import { Footer } from "../../components/profile/Footer";

const MyProfile: NextPage = () => {
  return (
    <section>
      <Head>
        <title>마이 프로필</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">마이 프로필과 대시보드</h1>
      <MyContainer account={undefined} />
      <Footer />
    </section>
  );
};

export default MyProfile;
