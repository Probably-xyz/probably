/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const investorRouter = createTRPCRouter({
  create: protectedProcedure
    .mutation(async ({ ctx }) => {
      
      return ctx.db.investor.create({
        data: {
          name: ctx.session.user.name,
          email: ctx.session.user.email,
          image: ctx.session.user.image,
          bio: " ",
          userId: ctx.session.user.id,
        },
      });
    }),
//   getLatest: protectedProcedure.query(({ ctx }) => {
//     return ctx.db.post.findFirst({
//       orderBy: { createdAt: "desc" },
//       where: { createdBy: { id: ctx.session.user.id } },
//     });
//   }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
});
