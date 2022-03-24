import type { NextPage } from "next";
import Head from "next/head";
import { MyContainer } from "../../components/profile/MyContainer";
import { Footer } from "../../components/profile/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Profile: NextPage = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");

  useEffect(() => {
    try {
      setAccount(router.query.params![0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <Head>
        <title>유저 프로필</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">유저 프로필과 대시보드</h1>
      <MyContainer account={account} />
      <Footer />
    </section>
  );
};

export default Profile;
