import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email";
import { env } from "~/env";
import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    EmailProvider({
      server: {
        host: env.SMTP_HOST,
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        port: parseInt(process.env.SMTP_PORT as string, 10),
        secureConnection: true,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
    })
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    error: "auth/login"
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
