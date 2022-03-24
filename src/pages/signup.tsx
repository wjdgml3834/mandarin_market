import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { SignUpPage } from "../components/signup/SignUp";
import { SignUpProfile } from "../components/signup/SignUpProfile";

const SingUp: NextPage = () => {
  const [signUp, setSignUp] = useState({ email: "", password: "" });

  return (
    <section>
      <Head>
        <title>회원가입｜감귤마켓</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">회원가입</h1>
      {signUp.email === "" ? (
        <SignUpPage setSignUp={setSignUp} />
      ) : (
        <SignUpProfile signUp={signUp} />
      )}
    </section>
  );
};

export default SingUp;
