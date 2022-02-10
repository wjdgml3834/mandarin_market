import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { API_ENDPOINT } from "../../../constants";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "email-password-credential",
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "이메일 입력" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        // console.log(credentials);
        const email = credentials.email;
        const password = credentials.password;
        const loginDate = {
          user: {
            email: email,
            password: password,
          },
        };
        const res = await axios.post(API_ENDPOINT + "user/login/", loginDate);
        if (res.data.user) {
          // console.log(res.data.user);
          const user = {
            name: res.data.user.accountname,
            email: res.data.user.email,
            image: res.data.user.image,
          };
          // console.log(credentials);
          return user;
        }
        throw new Error("아이디 혹은 패스워드가 틀립니다.");
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        // token.res = account.res;
        // console.log(token);
        // console.log(account);
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      // session.res = token.res;
      console.log(session);
      return session;
    },
  },
});
