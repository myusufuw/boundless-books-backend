import { OpenAPIHono } from "@hono/zod-openapi"
import { prisma } from "../lib/db"
import { checkUserToken } from "../middleware/check-user-token"
import { getAll } from "./services"
import type { User } from "@prisma/client"

const API_TAG = ["Cart"]

type Bindings = {
  TOKEN: string
}

type Variables = {
  user: User
}

export const cartRoute = new OpenAPIHono<{
  Bindings: Bindings
  Variables: Variables
}>()

  // GET ALL ORDER
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all orders",
      security: [
        {
          Bearer: [],
        },
      ],
      responses: {
        200: {
          description: "List of orders",
        },
        400: {
          description: "Failed to get all orders",
        },
      },
      middleware: checkUserToken(),
      tags: API_TAG,
    },
    async (c) => {
      const user = c.var.user

      return await getAll(c, user)
    }
  )
