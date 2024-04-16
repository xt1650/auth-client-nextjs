import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// import userData from "@/dummy.json";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      credentials: {
        username: {label: "Username11", type: "text", placeholder: "jsmith"},
        password: {label: "Password", type: "password"},
      },

      async authorize(credentials) {
        const username = credentials.username;
        const password = credentials.password;

        console.log(username);
        console.log(password);

        // for (var index in userData.users) {
        //   let record = userData.users[index];
        //   var user = {};
        //   var flag = false;

        //   if (record.username == username) {
        //     if (record.password == password) {
        //       user = {
        //         id: record.id,
        //         name: record.username,
        //       };
        //       flag = true;
        //       break;
        //     }
        //   }
        // }

        if (flag) {
          return user;
        }

        return true;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),

    

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
