import { randomUUID } from "crypto";
import path from "path";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  // protectedProcedure,
} from "~/server/api/trpc";

export const filesRouter = createTRPCRouter({
  saveFile: publicProcedure
    .input(
      z.object({
        base64String: z.string(),
        mimeType: z.string(),
        extension: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { uploadFile } = await import("~/services/aws/s3");

      const fileName = randomUUID() + "." + input.extension;
      const filePath = path.join("test", fileName);

      const buffer = Buffer.from(input.base64String);
      await uploadFile(buffer, filePath);

      return {
        message: "File uploaded",
      };
    }),
});
