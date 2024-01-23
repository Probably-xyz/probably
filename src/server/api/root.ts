/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { founderRouter } from "./routers/founder";
import { investorRouter } from "./routers/investor";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  investor: investorRouter,
  founder: founderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
