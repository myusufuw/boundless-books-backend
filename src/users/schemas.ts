import { z } from "@hono/zod-openapi"

export const UsernameUser = z.object({
  username: z.string().min(3).openapi({ example: "elon_musk" }),
})
