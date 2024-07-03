import { OpenAPIHono } from "@hono/zod-openapi"
import type { User } from "@prisma/client"
import { checkUserToken } from "../middleware/check-user-token"
import { getOrderCart } from "./services"

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

  // GET ALL CARTS
  .openapi(
    {
      method: "get",
      path: "/",
      description: "Get all carts",
      security: [
        {
          Bearer: [],
        },
      ],
      responses: {
        200: {
          description: "List of carts",
        },
        400: {
          description: "Failed to get order carts",
        },
      },
      middleware: checkUserToken(),
      tags: API_TAG,
    },
    async (c) => {
      const user = c.var.user
      const carts = await getOrderCart(user.id)

      return c.json(carts)
    }
  )
