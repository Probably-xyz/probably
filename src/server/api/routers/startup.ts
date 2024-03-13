
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const startupRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.startup.findMany({
      orderBy: {createdAt: 'desc'}
    })
  }),
  getMyStartups: protectedProcedure.query(({ ctx }) => {
    return ctx.db.founder.findUnique({
      where: {
        userId: ctx.session.user.id
      },
      include: {
        startups: true
        
      }
      
    })
  }),
  getOne: protectedProcedure
  .input(z.string())
  .query(({ ctx, input }) => {
    return ctx.db.startup.findUnique({
      where: {id: input}
    })
  }),
  init: protectedProcedure.mutation(({ctx}) => {
    return ctx.db.startup.create({
      data: {
          founderId: ctx.session.user.id,
          name: " "
      }
    })
  }),
  create: protectedProcedure
  .input(z.object({
    name: z.string().min(2),
    industry: z.string(),
    tagline: z.string().max(70),
    description: z.string().min(100),
    founded: z.date(),
    region: z.string(),
    lookingFor: z.string(),
    milestones: z.string().min(100),
    development: z.string(),
    stage: z.string(),
    teamSize: z.string(),
    teamDesc: z.string().min(50),
    id: z.string(),
    // fundGoal: z.string().optional(),
    // video: z.string().optional(),
    // website: z.string().url().optional(),
    // linkedin: z.string().url().optional(),
    // twitter: z.string().url().optional(),
    // other: z.string().url().optional()
  }))
  .mutation(async({input, ctx}) => {
      return ctx.db.startup.create({
        data: {
              founderId: input.id,
              name: input.name,
              industry: input.industry,
              tagline: input.tagline,
              region: input.region,
              desc: input.description,
              founded: input.founded,
              lookingFor: input.lookingFor,
              milestones: input.milestones,
              development: input.development,
              stage: input.stage,
              teamSize: input.teamSize,
              teamDesc: input.teamDesc,
              logo: "https://wrfjtyknswsneytnlxik.supabase.co/storage/v1/object/sign/internal/prbly-text-logo.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbnRlcm5hbC9wcmJseS10ZXh0LWxvZ28uanBlZyIsImlhdCI6MTcwODQ4MTA3OSwiZXhwIjoxNzA5MDg1ODc5fQ.InIKnoci_BiFQ2ysubaZ9JwJe2eo6o5qdCinfiTQLjQ&t=2024-02-21T02%3A04%3A39.478Z",
              pitch: "https://wrfjtyknswsneytnlxik.supabase.co/storage/v1/object/sign/internal/tylleum_pitch%20(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbnRlcm5hbC90eWxsZXVtX3BpdGNoICgxKS5wZGYiLCJpYXQiOjE3MDg0NzczNDIsImV4cCI6MTcwOTA4MjE0Mn0.VX6ht-ysschvC0xBR2o-OLfIpUX19m3KbewyQcfECoA&t=2024-02-21T01%3A02%3A22.639Z",
              fundGoal: "",
              video: "",
              website: "",
              linkedin: "",
              twitter: "",
              otherSocial: "",
        }
      })
      
  }),
  updateAdditional: protectedProcedure
  .input(z.object({
    fundGoal: z.string().optional(),
    video: z.string().optional(),
    website: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    other: z.string().url().optional()
  }))
  .mutation(async({input, ctx}) => {
    return ctx.db.founder.update({
      where: { userId: ctx.session.user.id },
      data: {
        startups:{
          
        }
      }
    })
  })

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
});
