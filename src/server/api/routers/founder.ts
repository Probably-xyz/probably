/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const founderRouter = createTRPCRouter({
  updateProfile: protectedProcedure
  .input(z.object({
    name: z.string().min(2),
    title: z.string(),
    status: z.string(),
    tagline: z.string().max(70),
    summary: z.string(),
  }))
  .mutation(async({ctx, input}) => {
    return ctx.db.founder.update({
      where: {
        userId: ctx.session.user.id
      },
      data: {
        name: input.name,
        title: input.title,
        status: input.status,
        shortDesc: input.tagline,
        summary: input.summary,
        user: {
          update: {
            name: input.name
          }
        }
      }
    })
  }),
  updateSocials: protectedProcedure
  .input(z.object({
    linkedin: z.string().url(),
    github: z.string().url(),
    twitter: z.string().url(),
    phone: z.string(),
  }))
  .mutation(async({ctx, input}) => {
    return ctx.db.founder.update({
      where: {
        userId: ctx.session.user.id
      },
      data: {
        linkedin: input.linkedin,
        github: input.github,
        twitter: input.twitter,
        number: input.phone,
      }
    })
  }),
  create: protectedProcedure.mutation(async ({ ctx }) => {
    return ctx.db.user.update({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        founder: true,
      },
      data: {
        role: "founder",
        founder: {
          create: {
            name: ctx.session.user.name,
            email: ctx.session.user.email,
          }
        }
        }
    });
  }),
  // getStartups: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.startup.findMany({
  //     orderBy: { createdAt: "desc" },
  //     where: { authorId: ctx.session.user.id },
  //   });
  // }),
  getProfile: protectedProcedure.query(({ ctx }) => {
    return ctx.db.founder.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  //   getSecretMessage: protectedProcedure.query(() => {
  //     return "you can now see this secret message!";
  //   }),
});
