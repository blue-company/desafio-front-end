import { LoginMock } from "@/mock/login";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "Insira seu email ",
        },
        password: {
          label: "senha",
          type: "password",
          placeholder: "Insira sua senha",
        },
      },
      async authorize(credentials){
        if (!credentials) {
          return null;
        }

        try {
          const token = await LoginMock({
            email: credentials.email,
            password: credentials.password,
          });
          
          if (!token) {
            return null;
          }
          const user = await token.json();
          
          return user ;
        } catch (error) {
          
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 1, // 1 hour
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks:{
    async jwt({token, user}) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({session, token, user}) {
      session = token.user as any
      return session;
    }
  }
}

export const handler = NextAuth(nextAuthOptions);

export const {handlers, signIn, auth, signOut } = handler;

