import { OpenAPIHono } from "@hono/zod-openapi"
import type { User } from "@prisma/client"
import { checkUserToken } from "../middleware/check-user-token"
import { CreateOrderItem } from "./schemas"
import { createOrder } from "./services"

const API_TAG = ["Order Item"]

type Bindings = {
  TOKEN: string
}

type Variables = {
  user: User
}

export const orderRoute = new OpenAPIHono<{
  Bindings: Bindings
  Variables: Variables
}>()

  // CREATE NEW
  .openapi(
    {
      method: "post",
      path: "/",
      description: "Create new order",
      security: [
        {
          Bearer: [],
        },
      ],
      request: {
        body: {
          content: {
            "application/json": {
              schema: CreateOrderItem,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successfully created new order",
        },
      },
      middleware: checkUserToken(),
      tags: API_TAG,
    },
    async (c) => {
      const body = await c.req.json()
      const user = c.var.user

      return await createOrder(c, user, body.productId)
    }
  )
