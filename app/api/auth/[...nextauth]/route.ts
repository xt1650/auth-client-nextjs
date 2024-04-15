// export { GET, POST } from "@/auth.js"

import NextAuth from "next-auth";
import axios from 'axios'

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// import userData from "@/dummy.json";

// export const {
//   handlers: { GET, POST },
//   auth,
// } =

const handler = NextAuth({
  session: { strategy: "jwt" },
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       console.log(user, account, profile, email, credentials);

//       return true;
//     },
//   },
  providers: [
    CredentialsProvider({
      name: "custom",
      credentials: {
        username: { label: "Username11", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const username = credentials.username;
        const password = credentials.password;

        console.log(username);
        console.log(password);
        axios.post("/account/register",{
          email:username,
          password:password
        }).then((response) => {
          console.log(response);
        }) .catch((error) => console.log(error));
        // console.log(data);
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

       

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

        // if (flag) {
        //   return user;
        // }

        const user1 = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        return user1;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
