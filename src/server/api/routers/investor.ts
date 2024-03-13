/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
            name:   ctx.session.user.name,
            email:  ctx.session.user.email,
            userId: ctx.session.user.id
        },
      }),
      ctx.db.user.update({
        where: {
            id: ctx.session.user.id
        },
        data: {
            role: "investor"
        }
      })
    }),
  getLiked: protectedProcedure.query(({ ctx }) => {
    return ctx.db.investor
    .findUnique({ where: { userId: ctx.session.user.id } })
    .liked()
  }),

  // likeStartup: protectedProcedure.mutation(({ ctx }) => {
  //   return ctx.db.investor.update({
  //     where: { userId: ctx.session.user.id},
  //     data: {liked: {id: 'ssss'}},
  //   });
  // }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
});
