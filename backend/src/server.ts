import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { db, type User } from "./db";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  userList: publicProcedure.query(async (): Promise<User[]> => {
    return await db.user.findMany();
  }),

  userById: publicProcedure
    .input(z.number())
    .query(async (opts): Promise<User | undefined> => {
      const { input: id } = opts;
      return await db.user.findById(id);
    }),

  userCreate: publicProcedure
    .input(z.string())
    .mutation(async (opts): Promise<User> => {
      const { input: name } = opts;
      return await db.user.create(name);
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
console.log("tRPC listening to port 3000");
