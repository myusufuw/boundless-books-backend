import { z } from "@hono/zod-openapi"

export const UsernameUser = z.object({
  username: z.string().min(3).openapi({ example: "elon_musk" }),
})

export const CreateUser = z.object({
  username: z.string().min(3).openapi({ example: "elon_musk" }),
  email: z.string().email().openapi({ example: "elon@x.com" }),
  password: z.string().min(5).openapi({ example: "Xyz_123" }),
})

export const LoginUser = z.object({
  username: z.string().min(3).openapi({ example: "elon_musk" }),
  password: z.string().min(5).openapi({ example: "Xyz_123" }),
})
